import streamlit as st
import requests
import json

# Function to upload file to roboflow
def upload_to_roboflow(file, platform_url, api_key):
    upload_url = f"https://api.roboflow.com/dataset/{platform_url}/upload?api_key={api_key}"
    files = {'file': file}
    response = requests.post(upload_url, files=files)
    return response.json()

# Streamlit app
st.title("Detective Search")
st.write("Search for a person by uploading an image or a video.")

# Input fields
platform_url = st.text_input("Platform URL", "")
search_type = st.selectbox("Search Type", ["Search by Image", "Search by Video", "Search in Live Streams"])
uploaded_file = st.file_uploader("Upload File", type=["jpg", "jpeg", "png", "mp4", "avi", "mov"])

if st.button("Search"):
    if platform_url and uploaded_file:
        st.write("Uploading file...")
        response = upload_to_roboflow(uploaded_file, platform_url, "YeQR8euN2UerJun9lYRI")
        st.write("Response from Roboflow:")
        st.json(response)
    else:
        st.error("Please provide both the platform URL and a file to upload.")

st.write("Developed by Bbypepe")
