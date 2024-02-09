from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

#Create a FastAPI instance
app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins = ["google.com","mywebsite.com","*.com"],
    allow_credentials = True,
    allow_methods = ["*"],   #allow_methods = ["GET", "POST", "PUT", "DELETE", etc],
    allow_headers = ["*"],
)
