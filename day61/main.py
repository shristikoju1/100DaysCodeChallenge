from fastapi import FastAPI
from fastapi import Body, Header
from pydantic import BaseModel, Field


app = FastAPI()

@app.get("/read")
def read_root():
    return{
        "msg":"lets learn FastAPI"
    }
    
@app.get("/")
def greet_query(name: str = Body()):
    return{
        "msg": f"hello {name}"
    }
    
class Books(BaseModel):
    title: str = Field(..., min_length = 45)
    author : str | None = 'string'
    
# @app.post('/book')
# async def post_book(book: Books, response_model: Books):
#     return {
#         'title': 'hello'
#     }
    
@app.post('/book')
async def post_book(book: str | None = Header(default = 'default') ):
    return book


    
