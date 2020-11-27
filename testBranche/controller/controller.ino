const int buttonPin01 = 13;
const int buttonPin02 = 12;
const int buttonPin03 = 10;
const int buttonPin04 = 9;


void setup() {
  // put your setup code here, to run once:
 Serial.begin(9600); // Starts the serial communication

 pinMode(buttonPin01, INPUT);
 pinMode(buttonPin02, INPUT);
 pinMode(buttonPin03, INPUT);
 pinMode(buttonPin04, INPUT);

 digitalWrite(buttonPin01, HIGH);
 digitalWrite(buttonPin02, HIGH);
 digitalWrite(buttonPin03, HIGH);
 digitalWrite(buttonPin04, HIGH);
 
}

void loop() {
  // put your main code here, to run repeatedly:
  if(digitalRead(buttonPin01) == LOW)
  {
    Serial.write(1);
    Serial.flush();
    delay(20);
  }

  if(digitalRead(buttonPin02) == LOW)
  {
    Serial.write(2);
    Serial.flush();
    delay(20);
  }

  if(digitalRead(buttonPin03) == LOW)
  {
    Serial.write(3);
    Serial.flush();
    delay(20);
  }

  if(digitalRead(buttonPin04) == LOW)
  {
    Serial.write(4);
    Serial.flush();
    delay(20);
  }
}
