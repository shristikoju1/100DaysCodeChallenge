from fastapi import FastAPI, Cookie, JSONResponse  # Import necessary modules

app = FastAPI()

# Define a route to get the value of a cookie
@app.get("/cookie")
async def get_cookie(name: str = Cookie(None)):
    if name:
        return {
            "msg" : "hello " + name  # Return a message with the name if the cookie is set
        }
        
    return {
        "msg" : "hello unknown"  # Return a default message if the cookie is not set
    }
    
# Define a route to set a cookie with the provided name
@app.get("/scookie/{name}")
async def set_cookie(name: str):
    # Create a JSONResponse object with a message
    res = JSONResponse(
        content = {
            "msg": "Your cookie is set."
        }
    )
    
    # Set a cookie with the specified key (name) and value
    res.set_cookie(key='name', value=name)
    
    return res  # Return the JSONResponse object with the message


