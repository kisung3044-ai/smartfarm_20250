document.addEventListener('DOMContentLoaded', () => {
    // 1. HTML 요소들을 가져옵니다.
    const scanButton = document.getElementById('scan-button');
    const nfcTagIdInput = document.getElementById('nfc-tag-id');

    // 2. 결과 표시 영역의 요소들
    const safetyStatus = document.getElementById('safety-status');
    const safetyLastCheck = document.getElementById('safety-last-check');
    const managementStatus = document.getElementById('management-status');
    const equipmentName = document.getElementById('equipment-name');
    const skillScore = document.getElementById('skill-score');
    const skillCategory = document.getElementById('skill-category');
    const rawDataPre = document.getElementById('raw-data');
    const detailsView = document.getElementById('details-view');

    // 3. 가상 데이터 셋 
    const mockData = {
        // NFC ID: A1B2C3D4 (용접기: 양호 상태)
        'A1B2C3D4': {
            safety: '정상 (GOOD)',
            safety_class: 'management', 
            last_check: '2025-11-27',
            management: '점검 완료',
            equipment: 'TIG 용접기 #01',
            skill: '85점 (우수)',
            skill_category: '수평 필릿 용접',
            raw: { temp: '25°C', power_cycle: 120, last_user: '김철수' }
        },
        // NFC ID: E5F6G7H8 (드론: 주의/경고 상태)
        'E5F6G7H8': {
            safety: '주의 (WARNING)',
            safety_class: 'safety', 
            last_check: '2025-11-20',
            management: '배터리 교체 필요',
            equipment: '교육용 드론 #05',
            skill: '62점 (보통)',
            skill_category: '이착륙 제어',
            raw: { battery_health: '65%', total_flights: 55, last_firmware: 'V3.1' }
        }
    };

    // 4. "데이터 가져오기" 버튼 클릭 이벤트
    scanButton.addEventListener('click', () => {
        // A1B2C3D4 또는 E5F6G7H8 ID를 시뮬레이션
        const simulatedNfcId = (nfcTagIdInput.value === 'E5F6G7H8') ? 'E5F6G7H8' : 'A1B2C3D4';
        nfcTagIdInput.value = simulatedNfcId;

        // 로딩 시뮬레이션
        displayLoadingState();

        setTimeout(() => {
            const data = mockData[simulatedNfcId];
            if (data) {
                updateDisplay(data);
            } else {
                updateDisplayNotFound();
            }
        }, 1000); // 1초 지연
    });

    // 5. 로딩 상태 표시 함수
    function displayLoadingState() {
        const resultCards = document.querySelectorAll('.result-card');
        resultCards.forEach(card => card.style.backgroundColor = '#bdc3c7'); 
        safetyStatus.textContent = '...데이터 로드 중...';
        managementStatus.textContent = '...데이터 로드 중...';
        skillScore.textContent = '...데이터 로드 중...';
        detailsView.style.display = 'none';
    }

    // 6. 결과를 HTML에 업데이트하는 함수
    function updateDisplay(data) {
        const safetyCard = safetyStatus.closest('.result-card');
        // 카드 색상을 데이터에 따라 변경
        safetyCard.className = `result-card ${data.safety_class}`; 

        safetyStatus.textContent = data.safety;
        safetyLastCheck.textContent = data.last_check;
        managementStatus.textContent = data.management;
        equipmentName.textContent = data.equipment;
        skillScore.textContent = data.skill;
        skillCategory.textContent = data.skill_category;

        rawDataPre.textContent = JSON.stringify(data.raw, null, 2);
        detailsView.style.display = 'block';
    }print     // 7. 데이터를 찾지 못했을 때 표시하는 함수
    function updateDisplayNotFound() {
        // 생략: 에러 처리가 필요하면 여기에 코드를 추가합니다.
    }

    // 페이지 로드 시 기본값 설정 및 시뮬레이션 실행
    nfcTagIdInput.value = 'A1B2C3D4';
    scanButton.click(); 
})PictureInPictureEvent ("pritn-onter
    ")
    document.addEventListener('DOMContentLoaded', () => {
    // 1. HTML 요소들을 가져옵니다.
    const scanButton = document.getElementById('scan-button');
    const nfcTagIdInput = document.getElementById('nfc-tag-id');

    // 2. 결과 표시 영역의 요소들
    const envStatus = document.getElementById('env-status');
    const envTempHumid = document.getElementById('env-temp-humid');
    const growthStage = document.getElementById('growth-stage');
    const growthCropName = document.getElementById('growth-crop-name');
    const issueStatus = document.getElementById('issue-status');
    const issueLastAction = document.getElementById('issue-last-action');
    const rawDataPre = document.getElementById('raw-data');
    const detailsView = document.getElementById('details-view');

    // 3. 가상 데이터 셋 (NFC ID에 따라 다른 데이터를 표시하도록 정의)
    const mockData = {
        // ID: ZONE-A-01 (딸기, 정상 상태)
        'ZONE-A-01': {
            env_status: '최적 (OPTIMAL)',
            env_class: 'environment', // CSS 클래스 변경을 위한 키
            temp_humid: '22°C / 65%',
            growth_stage: '수확기 3주차',
            crop_name: '설향 딸기 (B-12)',
            issue_status: '없음 (CLEAN)',
            last_action: 'N/A',
            // 상세 기록 (양액 급수, 노동, 비용 정보)
            raw: { 
                nutrient_supply: 'EC 2.0, pH 5.8 (최근 24시간)', 
                labor_log: '2025-12-03 (수확/정비)', 
                cost_profit: '총 비용: 50만원 / 예상 이익: 150만원' 
            }
        },
        // ID: ZONE-C-05 (토마토, 이상 징후 발생)
        'ZONE-C-05': {
            env_status: '주의 (WARNING)',
            env_class: 'issue', // CSS 클래스를 빨간색으로 변경
            temp_humid: '28°C / 85%',
            growth_stage: '개화/착과기',
            crop_name: '방울토마토 (D-05)',
            issue_status: '응애 발생 🚨',
            last_action: '2025-12-01 (농약 살포)',
            // 상세 기록
            raw: { 
                nutrient_supply: 'EC 3.1, pH 6.5 (과다 공급)', 
                labor_log: '2025-12-01 (방제 작업)', 
                cost_profit: '총 비용: 30만원 / 예상 이익: 80만원' 
            }
        }
    };

    // 4. "데이터 가져오기" 버튼 클릭 이벤트 리스너
    scanButton.addEventListener('click', () => {
        // NFC ID를 시뮬레이션
        const simulatedNfcId  = (nfcTagIdInput.value === 'ZONE-C-05') ? 'ZONE-C-05' : 'ZONE-A-01';
        
        // 입력창에 시뮬레이션 ID 표시
        nfcTagIdInput.value = simulatedNfcId;

        // 데이터 로딩 시뮬레이션
        displayLoadingState();

        // 1초 후 데이터 표시 시뮬레이션 (실제로는 서버 통신)
        setTimeout(() => {
            const data = mockData[simulatedNfcId];
            if (data) {
                updateDisplay(data);
            } else {
                updateDisplayNotFound();
            }
            sendNfcIdToServer(simulatedNfcId);
        }, 1000); 
    });

    // 5. 로딩 상태를 표시하는 함수
    function displayLoadingState() {
        const resultCards = document.querySelectorAll('.result-card');
        resultCards.forEach(card => card.style.backgroundColor = '#bdc3c7'); 
        envStatus.textContent = '...데이터 로드 중...';
        growthStage.textContent = '...데이터 로드 중...';
        issueStatus.textContent = '...데이터 로드 중...';
        detailsView.style.display = 'none';
    }

    // 6. 결과를 HTML에 업데이트하는 함수
    function updateDisplay(data) {
        // 환경 카드 업데이트 (CSS 클래스 변경 포함)
        const envCard = envStatus.closest('.result-card');
        envCard.className = `result-card ${data.env_class}`; 

        envStatus.textContent = data.env_status;
        envTempHumid.textContent = data.temp_humid;
        
        // 생육 카드 업데이트
        growthStage.textContent = data.growth_stage;
        growthCropName.textContent = data.crop_name;

        // 문제 징후 카드 업데이트
        issueStatus.textContent = data.issue_status;
        issueLastAction.textContent = data.last_action;

        // 세부 정보 업데이트
        rawDataPre.textContent = JSON.stringify(data.raw, null, 2);
        detailsView.style.display = 'block';
    }

    // 7. 데이터를 찾지 못했을 때 표시하는 함수 (생략)
    function updateDisplayNotFound() {
        alert('해당 NFC 태그 ID의 정보를 찾을 수 없습니다.');
    }

    // 페이지 로드 시 기본값 설정 및 시뮬레이션 실행
    nfcTagIdInput.value = 'ZONE-A-01';
    scanButton.click(); 

});
// NFC ID를 파이썬 서버로 전송하는 함수 (전화기 역할)
async function sendNfcIdToServer(nfcId) {
    // 파이썬 서버 주소 (여러분의 컴퓨터에서 켜져 있음)
    const serverUrl = 'http://127.0.0.1:5000/record'; 
    
    try {
        const response = await fetch(serverUrl, {
            method: 'POST', // 서버로 데이터를 보낼 때 사용
            headers: {
                'Content-Type': 'application/json'
            },
            // NFC ID를 JSON 형태로 포장해서 보냅니다.
            body: JSON.stringify({ nfc_id: nfcId })
        });
        
        const result = await response.json();

        if (response.ok) {
            // 성공적으로 기록되면 알림을 띄웁니다.
            alert(`✅ NFC 기록 성공! ID: ${nfcId}, 온도: ${result.temp}°C`);
        } else {
            // 실패하면 오류 메시지를 띄웁니다.
            alert(`❌ NFC 기록 실패: ${result.message}`);
        }

    } catch (error) {
        // 서버가 꺼져있거나 주소가 틀리면 이 오류가 뜹니다.
        alert('🚨 서버 연결 오류! 파이썬 서버가 켜져 있는지 확인하세요.');
    }
}