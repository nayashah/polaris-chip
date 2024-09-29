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
    this.fancy = false;
    this.description = "The Golden Retriever was developed in Scotland in the nineteenth century by Sir Dudley Marjoribanks (later to become Baron Tweedmouth) from Flat-coated Retrievers judiciously crossed with Tweed Water Spaniels and some other British dog breeds.";
  }

  static get properties() {
    return {
      fancy: { type: Boolean, reflect: true },
      name: { type: String },
      link: { type: String },
      imageSrc: { type: String },
      description: { type: String }
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      :host([fancy]) {
        background-color: lightblue;
        border: 2px solid fuchsia;
        box-shadow: 10px 5px 5px red;
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

      button {
        padding: 6px 8px;
        color: white;
        background-color: black;
        border-radius: 6px;  
        width: 50%;
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

      img {
        width: 100%;
        height: auto;
        max-height: 200px;
        object-fit: cover;
      }

      details summary {
        text-align: left;
        font-size: 20px;
        padding: 8px 0;
      }

      details[open] summary {
        font-weight: bold;
      }

      details div {
        border: 2px solid black;
        text-align: left;
        padding: 8px;
        height: 70px;
        overflow: auto;
      }
    `;
  }

  // This method listens for the toggle event
  openChanged(e) {
    if (e.target.hasAttribute('open')) {
      this.fancy = true;
    } else {
      this.fancy = false;
    }
  }

  render() {
    return html`
      <div class="card">
        <img src="${this.imageSrc}" alt="Image">
        <div class="container">
          <h4 class="title"><b>${this.name}</b></h4>
          <a href="${this.link}">Golden Retriever</a>
          <p><button>Adopt Today!</button></p>
          
          <!-- Add details/summary for description -->
          <details ?open="${this.fancy}" @toggle="${this.openChanged}">
            <summary>Description</summary>
            <div>
              ${this.description}  <!-- Render the description stored in the constructor -->
            </div>
          </details>
        </div>
      </div>
    `;
  }
}

customElements.define(MyCard.tag, MyCard);