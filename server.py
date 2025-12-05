import sqlite3
from flask import Flask, jsonify, request
from flask_cors import CORS
# Flask 앱 생성
app = Flask(__name__)
CORS(app)
# 데이터베이스 파일 이름 설정
DATABASE = 'smartfarm_data.db'

# 데이터베이스 연결 함수
def get_db_connection():
    # SQLite 데이터베이스에 연결
    conn = sqlite3.connect(DATABASE)
    # 데이터를 딕셔너리 형태로 가져오도록 설정
    conn.row_factory = sqlite3.Row
    return conn

# 데이터베이스 테이블 초기화 (데이터를 저장할 표 만들기)
def init_db():
    conn = get_db_connection()
    # 'records'라는 이름의 테이블을 생성합니다.
    # id (NFC 태그 ID), temp (온도), humidity (습도), recorded_at (기록 시간) 필드를 가집니다.
    conn.execute("""
        CREATE TABLE IF NOT EXISTS records (
            id TEXT PRIMARY KEY,
            temp REAL NOT NULL,
            humidity REAL NOT NULL,
            recorded_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
        );
    """)
    conn.commit()
    conn.close()

# 서버 시작 시 데이터베이스 초기화 함수를 실행
init_db()
# NFC ID를 받아서 데이터베이스에 새로운 기록을 추가하는 라우트
@app.route('/record', methods=['POST'])
def record_data():
    # 웹사이트에서 POST 요청으로 보낸 JSON 데이터를 받습니다.
    data = request.get_json()
    nfc_id = data.get('nfc_id')
    
    if not nfc_id:
        return jsonify({"message": "NFC ID가 필요합니다"}), 400

    # 임의의 데이터 (실제 센서 값 대신 임시 데이터 사용)
    temp = 25.5  # 예시 온도
    humidity = 65.0  # 예시 습도

    conn = get_db_connection()
    try:
        # 데이터베이스에 새로운 NFC 기록을 저장합니다.
        conn.execute(
            "INSERT INTO records (id, temp, humidity) VALUES (?, ?, ?)",
            (nfc_id, temp, humidity)
        )
        conn.commit()
        
        return jsonify({"message": f"NFC ID '{nfc_id}' 기록 성공", "temp": temp, "humidity": humidity}), 201
    except sqlite3.IntegrityError:
        # id (PRIMARY KEY)가 이미 존재하는 경우 업데이트로 처리할 수 있지만, 
        # 여기서는 간단히 오류 메시지를 반환합니다.
        return jsonify({"message": f"NFC ID '{nfc_id}'는 이미 존재합니다."}), 409
    finally:
        conn.close()

# 저장된 데이터를 웹사이트에 보여주기 위해 모든 기록을 가져오는 라우트
@app.route('/records', methods=['GET'])
def get_records():
    conn = get_db_connection()
    # 데이터베이스의 모든 기록을 조회합니다.
    records = conn.execute("SELECT * FROM records ORDER BY recorded_at DESC").fetchall()
    conn.close()
    
    # DB row 객체를 JSON으로 변환합니다.
    records_list = [dict(row) for row in records]
    return jsonify(records_list)
# 서버 실행
if __name__ == '__main__':
    # 디버그 모드를 켜서 코드를 수정할 때마다 서버가 자동으로 재시작되게 합니다.
    app.run(debug=True)