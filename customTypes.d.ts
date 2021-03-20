interface Animal {
  name?: string
  type: readonly string
  sound(): string 
}

class Dog extends animal{
  type: 'Dog'
  name: string
  sound() {
    return 'hup!'
  }
}