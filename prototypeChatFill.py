import google.generativeai as genai
import os

genai.configure(api_key=os.environ['GENAI_KEY'])

mode = ""

while mode != "friends" and mode != "fling":
  print("Friends or fling?")
  social = False
  mode = input()
  if mode == "friends":
    social = True


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
    "threshold": "BLOCK_ONLY_HIGH"
  },
  {
    "category": "HARM_CATEGORY_HATE_SPEECH",
    "threshold": "BLOCK_ONLY_HIGH"
  },
  {
    "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
    "threshold": "BLOCK_ONLY_HIGH"
  },
  {
    "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
    "threshold": "BLOCK_ONLY_HIGH"
  },
]

model = genai.GenerativeModel(model_name="gemini-pro",
                              generation_config=generation_config,
                              safety_settings=safety_settings)


while True:
  print("Enter your prefix:")
  strIn = input()
  if strIn == "/fling" or strIn == "/friends":
    if strIn == "/fling":
      social = False
      print("--Mode changed to fling.--" )
    else:
      social = True
      print("--Mode changed to friends.--" )
    continue
  else:
    print("--Generating...-- " + "'" + strIn + "'")
    if social:
      prompt_parts = [
      "You are to help someone potentially socially awkward finish their sentences in order to be friendly or make some friends. You are given as input their text, and, using that string as the first part of your output, create some good conversation starters or compliments that would make their message recipient more inclined to talk more. The focus is to be really friendly and kind and help someone make friends.Your target audience is freight drivers, people who are typically lonely and spend most of their day on the road. You want to tailor your answers to be things they can do with other freight drivers or commerce workers who may be lonely, may be on the road often, or may be very busy and have short blocks of free time.",
      "input: How",
      "output: How are you today? The weather is so nice!",
      "input: I like",
      "output: I like your hat! It has cool vibes.",
      "input: I heard",
      "output: I heard the next rest stop on our route has McDonalds. Care to join me for a Big Mac?",
      "input: What",
      "output: What activities are you into? I love driving at night, it's so relaxing!",
      f"input: {strIn}","output:",
      ]
    else:
      prompt_parts = [
      "Use your input as the first part of your output. Use that input as a prefix for your output, but in a seductive manner. This means, trying to be seductive or full of love and desire. You will help someone construct pick up lines or first-date type messages to get into a relationship. Please only generate an output that uses the input string at the very beginning of the output. If you cannot generate a relevant output, output a blank string. Do not use the input in the middle of the output string.Your target audience is freight drivers, people who are typically lonely and spend most of their day on the road. You want to tailor your answers to be things they can do with other freight drivers or commerce workers who may be lonely, may be on the road often, or may be very busy and have short blocks of free time.",
      "input: the big",
      "output: the big hat you wore is so hot! I need one of those.",
      "input: Are",
      "output: Are you today's date? Because you're a 10/10!",
      "input: My",
      "output: My ball accidentally rolled into your messages. ⚽️ Anyways, how are you? ;)",
      "input: Deez nuts",
      "output: Deez nuts are crazy for you. Come over tonight?",
      f"input: {strIn}",
      "output: ",
      ]
    response = model.generate_content(prompt_parts)
    print(response.text)
    print("")