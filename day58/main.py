from fastapi import FastAPI
from typing import Union
from enum import Enum
from pydantic import BaseModel

class Choice_Name(str, Enum):
    one = "one"
    two = "two"
    three = "three"
    
class schema(BaseModel):
    name: str
    description: str | None = None
    price: float
    tax: float | None = None
    
    
    

app = FastAPI()




@app.get("/hello")
async def root():
    return {"message": "Hello World"}


@app.get("/hi")
async def body():
    return {"message": "from Nepal"}

@app.get("/items/{item_id}")
async def read_item(item_id):
    var_name = {"path variable": item_id}
    return (var_name)

@app.get("/query/")
async def query_func(name: str,roll_no: Union[int, None]=None):
    var_name = {"Name":name, "Roll no" :roll_no}
    return (var_name)

# @app.get("/models/{model_name}")
# async def get_model(model_name: Choice_Name):
#     return (model_name)

@app.get("/models/{model_name}")
async def get_model(model_name: Choice_Name):
    
    if model_name.value == "one":    
        return {"model_name": model_name, "message": "Calling one"}

    if model_name.value == "two":
        return {"model_name": model_name, "message": "Calling two"}

    return {"model_name": model_name, "message": "Calling three"}

#Request Body
@app.post("/items/")
async def create_item(item: schema):
    return item
    