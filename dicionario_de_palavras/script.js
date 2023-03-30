class App {
    constructor() {
      
      this._onSubmit = this._onSubmit.bind(this);
      this._onResponse = this._onResponse.bind(this);
      this._onJSONready = this._onJSONready.bind(this);

      this.form = document.querySelector("form");
      this.form.addEventListener("submit", this._onSubmit);

      this.urlBase = "https://api.dictionaryapi.dev/api/v2/entries/en/";
      this.divText = document.querySelector("div");
    }

    _onSubmit(event){
      event.preventDefault();
      const textInput = document.querySelector("#word-text");
      const query = encodeURIComponent(textInput.value);
      this.divText.innerHTML = "";

      
      fetch(this.urlBase+query).then(this._onResponse).then(this._onJSONready);
    }

    _onResponse(response){
      return response.json();
    }

    _onJSONready(json)
    {
      const definition = json[0].meanings[0].definitions[0].definition;
      
      const span = document.createElement("span");
      span.appendChild(document.createTextNode(definition));
      this.divText.appendChild(span);
    }

   
  }
  
  class Button {
    constructor(containerElement, text, callBack) {
      this.containerElement = containerElement;
      this.text = text;
      
      this.onClick = this.onClick.bind(this);
      this.callBack = callBack;
      
      const button = document.createElement('button');
      button.textContent = text;
      button.addEventListener('click', this.onClick);
      this.containerElement.append(button);
      console.log("d")
    }
    
    onClick() {
        this.callBack(this.text)
    }
  }
  
  new App();