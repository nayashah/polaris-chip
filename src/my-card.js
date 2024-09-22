import { LitElement, html, css } from 'lit';

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.name = "Dog Breed: Golden Retrievers are the best!";
    this.link = "https://dogtime.com/dog-breeds/golden-retriever";
    this.imageSrc = "https://www.mygoldenretrieverpuppies.com/wp-content/uploads/2022/06/Golden-Retriever-Puppies-1024x683.jpeg";
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      .card {
        border: 8px solid black;
        max-width: 300px;
        margin: 8px 100px;
        text-align: center;
      }

      .title {
        color: black;
        font-size: 16px;
      }

      button_a {
        border-style: bold;
        padding: 8px;
        color: white;
        background-color: black;
        width: 50%;
        font-size: 16px;
      }

      button {
        padding: 6px 8px;
        color: white;
        background-color: black;
        border-radius: 6px;  
        width: 10%;
        font-size: 16px;    
        margin: 3px;        
      }

      button:hover {
        opacity: 0.8;
      }

      a {
        font-size: 24px;
        color: black;
      }

      button:hover, a:hover {
        opacity: 0.8;
      }
    `;
  }

  render() {
    return html`
      <div class="card">
        <img src="${this.imageSrc}" alt="Image" style="width:100%">
        <div class="container">
          <h4 class="name"><b>${this.name}</b></h4>
          <a href="${this.link}">Golden Retriever</a>
          <p><button_a>Adopt Today!</button_a></p>
        </div>
      </div>
    `;
  }

  static get properties() {
    return {
      name: { type: String },
      link: { type: String },
      imageSrc: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
