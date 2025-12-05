<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NFC 기반 실습 관리 시스템</title>
    <link rel="stylesheet" href="styles.css"> </head>
<body>

    <header class="header">
        <h1>NFC 실습 안전 및 능력 측정 시스템</h1>
        <p>전기 · 용접 · 드론 분야의 안전 및 실습 능력을 확인하세요.</p>
    </header>

    <main class="container">
        <section class="input-section">
            <h2>NFC 태그 스캔</h2>
            <p>장비나 작업자의 NFC 태그를 리더기에 스캔하세요.</p>
            <input type="text" id="nfc-tag-id" placeholder="NFC ID 입력 (예: 1A2B3C4D)" readonly>
            <button id="scan-button">데이터 가져오기 (시뮬레이션)</button>
        </section>

        <hr>

        <section class="results-section">
            <h2>📊 측정 결과</h2>
            <div id="status-display">
                <div class="result-card safety">
                    <h3>안전 상태</h3>
                    <p id="safety-status">데이터 로드 중...</p>
                    <p class="details">마지막 점검: <span id="safety-last-check"></span></p>
                </div>
                
                <div class="result-card management">
                    <h3>관리 상태</h3>
                    <p id="management-status">데이터 로드 중...</p>
                    <p class="details">장비명: <span id="equipment-name"></span></p>
                </div>
                
                <div class="result-card skill">
                    <h3>실습 능력</h3>
                    <p id="skill-score">데이터 로드 중...</p>
                    <p class="details">평가 항목: <span id="skill-category"></span></p>
                </div>
            </div>
            
            <div id="details-view" style="display: none;">
                <h3>세부 정보</h3>
                <pre id="raw-data"></pre>
            </div>
        </section>
    </main>

    <footer class="footer">
        <p>팀 프로젝트 시스템 | 고등학교 기술 실습 관리</p>
    </footer>

    <script src="app.js"></script> 
</body>
</html>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>스마트팜 온실 관리 시스템</title>
    <link rel="stylesheet" href="styles.css"> </head>
<body>

    <header class="header">
        <h1>🌱 스마트팜 생육 관리 대시보드</h1>
        <p>NFC 태그 스캔을 통해 구역별 환경 및 작물 상태를 확인하세요.</p>
    </header>

    <main class="container">
        <section class="input-section">
            <h2>구역/작물 NFC 태그 스캔</h2>
            <p>온실 내 특정 구역 또는 작물 태그를 스캔하세요.</p>
            <input type="text" id="nfc-tag-id" placeholder="NFC 구역 ID 입력 (예: ZONE-A-01)" readonly>
            <button id="scan-button">데이터 불러오기 (시뮬레이션)</button>
        </section>

        <hr>

        <section class="results-section">
            <h2>📊 실시간 및 생육 상태</h2>
            <div id="status-display">
                
                <div class="result-card environment">
                    <h3>1. 환경 데이터 상태</h3>
                    <p id="env-status">데이터 로드 중...</p>
                    <p class="details">온도/습도: <span id="env-temp-humid"></span></p>
                </div>
                
                <div class="result-card growth">
                    <h3>2. 작물 생육 정보</h3>
                    <p id="growth-stage">데이터 로드 중...</p>
                    <p class="details">작물명/품종: <span id="growth-crop-name"></span></p>
                </div>
                
                <div class="result-card issue">
                    <h3>3. 병해충 및 이상 징후</h3>
                    <p id="issue-status">데이터 로드 중...</p>
                    <p class="details">마지막 조치일: <span id="issue-last-action"></span></p>
                </div>

            </div>
            
            <div id="details-view" style="display: none;">
                <h3>📜 상세 기록 (양액, 노동, 비용 등)</h3>
                <pre id="raw-data"></pre>
            </div>
        </section>
    </main>

    <footer class="footer">
        <p>스마트팜 관리 시스템 | GreenTech Solutions</p>
    </footer>

    <script src="app.js"></script> 
</body>
</html>
body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f7f9;
    color: #333;
    line-height: 1.6;
}
.header {
    background-color: #2c3e50; 
    color: white;
    padding: 20px 0;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 30
}
.container {
    max-width: 1000px;
    margin: 30px auto;
    padding: 20px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05); 80
}
.input-section {
    text-align: center;
    padding: 20px;
}
#nfc-tag-id {
    padding: 10px;
    width: 80%;
    max-width: 300px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    background-color: #e9ecef;
}
#scan-button {
    padding: 10px 20px;
    background-color: #3498db; 
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
}
#scan-button:hover {
    background-color: #2980b9;
}
#status-display {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px 0;
}
.result-card {
    flex: 1;
    min-width: 280px;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    color: white;
    transition: transform 0.3s;
}
.safety {
    background-color: #e74c3c; /* 위험: 빨간색 */
}
.management {
    background-color: #2ecc71; /* 양호: 녹색 */
}
.skill {
    background-color: #f39c12; /* 능력: 주황색 */
}
.result-card h3 {
    margin-top: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    padding-bottom: 5px;
}
.result-card p {
    font-size: 24px;
    font-weight: bold;
    margin: 10px 0;
}
.footer {
    text-align: center;
    padding: 15px 0;
    background-color: #ecf0f1;
    color: #7f8c8d;
    margin-top: 20px;
}
/* 기본 스타일 */
body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f7f9;
    color: #333;
    line-height: 1.6;
}

.header {
    background-color: #1a5e30; /* 진한 녹색 (농장/성장) */
    color: white;
    padding: 20px 0;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.header h1 {
    margin: 0 0 5px;
}

.container {
    max-width: 1000px;
    margin: 30px auto;
    padding: 20px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
}

hr {
    border: 0;
    border-top: 1px solid #eee;
    margin: 20px 0;
}

/* 입력 섹션 스타일 */
.input-section {
    text-align: center;
    padding: 20px;
}

#nfc-tag-id {
    padding: 10px;
    width: 80%;
    max-width: 300px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    background-color: #e9ecef;
}

#scan-button {
    padding: 10px 20px;
    background-color: #2ecc71; /* 밝은 녹색 */
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
}

#scan-button:hover {
    background-color: #27ae60;
}

/* 결과 카드 섹션 스타일 */
#status-display {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px 0;
}

.result-card {
    flex: 1;
    min-width: 280px;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    color: white;
    transition: transform 0.3s;
}

.result-card:hover {
    transform: translateY(-5px);
}

/* 카드별 색상 */
.environment {
    background-color: #3498db; /* 파란색 (환경) */
}

.growth {
    background-color: #27ae60; /* 녹색 (성장) */
}

.issue {
    background-color: #e74c3c; /* 빨간색 (문제) */
}

.result-card h3 {
    margin-top: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    padding-bottom: 5px;
}

.result-card p {
    font-size: 24px;
    font-weight: bold;
    margin: 10px 0;
}

.result-card .details {
    font-size: 14px;
    opacity: 0.8;
}

/* 푸터 스타일 */
.footer {
    text-align: center;
    padding: 15px 0;
    background-color: #ecf0f1;
    color: #7f8c8d;
    margin-top: 20px;
}s
