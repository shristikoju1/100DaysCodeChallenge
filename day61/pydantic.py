from pydantic import BaseModel




class Hello:  # Define a class named Hello
    def __init__(self, name, age):  # Define a constructor method with parameters name and age
        self.name = name  # Assign the value of the name parameter to the name attribute of the object
        self.age = age    # Assign the value of the age parameter to the age attribute of the object
        
    def print_me(self):  # Define a method named print_me which takes no additional parameters (aside from self)
        print(self.name, self.age)  # Print the name and age attributes of the object

# Instantiate an object of the Hello class with name 'collabyte' and age 1
hello = Hello('collabyte', 1)

# Call the print_me method of the hello object, which prints its name and age
hello.print_me()






# Define a Pydantic model named HelloModel
class HelloModel(BaseModel):
    name: str
    age: int

# Instantiate an object of the HelloModel class with name 'collabyte' and age 1
hello = HelloModel(name='collabyte', age=1)

# Print the name and age attributes of the hello object
print(hello.name, hello.age)


