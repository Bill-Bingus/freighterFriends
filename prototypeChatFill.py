import google.generativeai as genai

genai.configure(api_key="AIzaSyDrJWx3t3BtDK1xZG-cqnF2_3YRX7b8MYk")

# Set up the model
generation_config = {
  "temperature": 0.9,
  "top_p": 1,
  "top_k": 1,
  "max_output_tokens": 2048,
}

safety_settings = [
  {
    "category": "HARM_CATEGORY_HARASSMENT",
    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
  },
  {
    "category": "HARM_CATEGORY_HATE_SPEECH",
    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
  },
  {
    "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
  },
  {
    "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
  },
]

model = genai.GenerativeModel(model_name="gemini-pro",
                              generation_config=generation_config,
                              safety_settings=safety_settings)


while True:
  prompt_parts = [
  "You are to help someone potentially socially awkward finish their sentences in order to be friendly or make some friends. You are given as input their texts, and, using that string as the first text of your output, create some good conversation starters or compliments that would make their message recipient more inclined to talk more. The focus is to be really friendly and kind and help someone make friends.Your target audience is freight drivers, people who are typically lonely and spend most of their day on the road. You want to tailor your answers to be things they can do with other freight drivers or commerce workers who may be lonely, may be on the road often, or may be very busy and have short blocks of free time.",
  "input: How",
  "output: How are you today? The weather is so nice!",
  "input: I like",
  "output: I like your hat! It has cool vibes.",
  "input: I heard",
  "output: I heard the next rest stop on our route has McDonalds. Care to join me for a Big Mac?",
  "input: What",
  "output: What activities are you into? I love driving at night, it's so relaxing!",
  f"input: {input()}","output:",
]
  response = model.generate_content(prompt_parts)
  print(response.text)
