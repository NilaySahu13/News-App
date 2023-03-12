import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export default class News extends Component {
  articles= [
    {
      "source": {
      "id": null,
      "name": "The Guardian"
      },
      "author": "Yotam Ottolenghi",
      "title": "Belly up: Yotam Ottolenghi's porchetta recipe",
      "description": "Oregano-stuffed porchetta with pickled shallots and a side of lemony potatoes with rainbow chard; plus, in the unlikely event that you've any leftovers, an apple and kohlrabi salad with porchetta and horseradishSome dishes fill me with a certain feeling of ac…",
      "url": "https://www.theguardian.com/food/2023/mar/11/yotam-ottolenghi-recipe-oregano-stuffed-porchetta-lemony-potato-rainbow-chard-apple-kohlrabi-salad-horseradish",
      "urlToImage": "https://i.guim.co.uk/img/media/cf72ed8dde86ae578a2acfe53ea08ff76e74c947/22_2667_3618_2168/master/3618.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=1b25ec6c7e19f9586a57657dc39d5eb5",
      "publishedAt": "2023-03-11T08:00:15Z",
      "content": "Some dishes fill me with a certain feeling of accomplishment whenever I make them, the magnificent Italian porchetta being one. Master porchetta, and youre in for the most wonderful pork roast: tende… [+7069 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "The Guardian"
      },
      "author": "Joel Golby",
      "title": "Ted Lasso: I tried to resist, but this comedy has perfected a rare Friends-like TV magic",
      "description": "Series three of the Emmy-winning series is phenomenally composed - everything just works. You can't help but be drawn into it, no matter how much you hate its nicenessI have a complicated relationship with Ted Lasso (Apple TV+), which returns on 15 March for …",
      "url": "https://www.theguardian.com/tv-and-radio/2023/mar/11/ted-lasso-i-tried-to-resist-but-this-comedy-has-perfected-a-rare-friends-like-tv-magic",
      "urlToImage": "https://i.guim.co.uk/img/media/a4a4cf878407d3352844f6fc1bbbc858024d9ca3/0_250_7932_4759/master/7932.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=8ebbb5dd2162e3b24dc07d67d2941ac2",
      "publishedAt": "2023-03-11T07:00:13Z",
      "content": "I have a complicated relationship with Ted Lasso (Apple TV+), which returns on 15 March for its third season (and possibly final, though why they would bring an end to a popular show that is saying a… [+4286 chars]"
      },
      {
        "source": {
        "id": null,
        "name": "The Guardian"
        },
        "author": "Guardian Staff",
        "title": "From Champions to A Town Called Malice: a complete guide to this week's entertainment",
        "description": "Whether it's a film comedy about an unusual basketball team or a TV drama set on the Costa Del Crime, our critics have you covered for the next seven daysChampionsOut nowSince making a name for himself as a gross-out master with Dumb and Dumber (directed with…",
        "url": "https://www.theguardian.com/culture/2023/mar/11/going-out-staying-in-champions-a-town-called-malice-complete-guide-to-entertainment-this-week",
        "urlToImage": "https://i.guim.co.uk/img/media/518f5427d0a2735c40e2efe9b55503acbfdc954c/0_19_2837_1703/master/2837.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=343414a6066ca240989de57224150927",
        "publishedAt": "2023-03-11T06:00:12Z",
        "content": "Going out:Cinema\r\nChampionsOut nowSince making a name for himself as a gross-out master with Dumb and Dumber (directed with his brother Peter), Bobby Farrellys films have been a mixed bag. Hes on fam… [+9785 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "prosen@insider.com (Phil Rosen)",
        "title": "Here's why you should expect a housing rebound, according to a top economist at the National Association of Realtors",
        "description": "Insider's Phil Rosen sits down to interview Nadia Evangelou, senior economist and director of research at the National Association of Realtors.",
        "url": "https://www.businessinsider.com/housing-rebound-real-estate-economist-realtors-home-price-forecast-markets-2023-3",
        "urlToImage": "https://i.insider.com/6409ecfd1bbdd30018ed980b?width=1200&format=jpeg",
        "publishedAt": "2023-03-11T12:30:00Z",
        "content": "Gooood morning readers! I'm Phil Rosen. On tap today we've got a great interview with a top real estate economist and this week's best markets stories, including updates on the Silicon Valley Bank me… [+5393 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Xataka.com"
        },
        "author": "Manu García (Visnuh)",
        "title": "Los siete mejores auriculares Bluetooth tws para regalar este Día del Padre",
        "description": "¿Aún sigues sin regalo para el Día del Padre? Si es así, una buena idea pueden ser unos auriculares Bluetooth, que lo mismo le irán bien para las llamadas que si es de los de escuchar la radio con el móvil. Para ponértelo fácil, hemos reunido unas cuantas pro…",
        "url": "https://www.xataka.com/seleccion/siete-mejores-auriculares-bluetooth-tws-para-regalar-este-dia-padre",
        "urlToImage": "https://i.blogs.es/ab8ff5/auriculares/840_560.jpeg",
        "publishedAt": "2023-03-11T09:31:29Z",
        "content": "¿Aún sigues sin regalo para el Día del Padre? Si es así, una buena idea pueden ser unos auriculares Bluetooth, que lo mismo le irán bien para las llamadas que si es de los de escuchar la radio con el… [+5965 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Xataka.com"
        },
        "author": "Yúbal Fernández",
        "title": "Los 16 mejores gestores de contraseñas para proteger y recordar todas las que tengas",
        "description": "Te traemos una lista con los 16 mejores gestores de contraseñas para que nunca se te olvide ninguna. Los gestores de contraseñas son programas donde se pueden guardar todas las claves de acceso a páginas web y aplicaciones, manteniéndolas sincronizadas entre …",
        "url": "https://www.xataka.com/basics/16-mejores-gestores-contrasenas-para-proteger-recordar-todas-que-tengas",
        "urlToImage": "https://i.blogs.es/4f8493/gestor-contrasenas/840_560.jpeg",
        "publishedAt": "2023-03-11T11:01:29Z",
        "content": "Te traemos una lista con los 16 mejores gestores de contraseñas para que nunca se te olvide ninguna. Los gestores de contraseñas son programas donde se pueden guardar todas las claves de acceso a pág… [+10161 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Simonwillison.net"
        },
        "author": null,
        "title": "Running LLaMA 7B on a 64GB M2 MacBook Pro with Llama.cpp",
        "description": "Facebook's [LLaMA](https://research.facebook.com/publications/llama-open-and-efficient-foundation-language-models/) is a \"collection of foundation language models ranging from 7B to 65B parameters\", r",
        "url": "https://til.simonwillison.net/llms/llama-7b-m2",
        "urlToImage": "https://til.simonwillison.net/-/media/screenshot/llms_llama-7b-m2.md",
        "publishedAt": "2023-03-11T04:32:22Z",
        "content": "Facebook's LLaMA is a \"collection of foundation language models ranging from 7B to 65B parameters\", released on February 24th 2023.\r\nIt claims to be small enough to run on consumer hardware. I just r… [+7642 chars]"
        },
  ];
  static defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'technology',

  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor(){
    super();
    this.state = {
      articles : this.articles,
      loading: false,
      page: 1,

    };
    console.log("Consturctor called");
  };
  async componentDidMount(){
    console.log("runnn");
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=9a572589b97a4b9eaaf68a7e43c6a2be&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(data);
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false})
  };
  handleNextClick = async ()=>{
    if(!(this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
      let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=9a572589b97a4b9eaaf68a7e43c6a2be&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true})
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(data);
      this.setState({articles: parsedData.articles})
      console.log("Next");
      this.setState({
        page: this.state.page + 1,
        loading: false,
      })
    };
  }
  handlePreviousClick = async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=9a572589b97a4b9eaaf68a7e43c6a2be&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(data);
    this.setState({articles: parsedData.articles})
    console.log("Previous");
    this.setState({
      page: this.state.page-1,
      loading: false,
    })
  };
  render() {
    
    return (
      <div>
        <div className="row my-4">
          <h2 className="text-center" >NewsApp - Top Headlines</h2>
          {this.state.loading && <Spinner/>}
          {!(this.state.loading) && this.state.articles.map((element)=>{
            return(
            <div className="col md-3 mx-2 px-4"  key={element.url}>
              <NewsItems title={element.title?element.title.slice(0, 45):' '} description={element.description?element.description.slice(0, 88):' '} imgURL={element.urlToImage?element.urlToImage:'./../img.webp'} newsURL={element.url} publishedAt={element.publishedAt?element.publishedAt:' '} author={element.author?element.author:'Unknown'} source={element.source.name?element.source.name: ''} />
            </div>
            )
          })} 
        </div>       
        <div className="d-flex justify-content-between">
        <button disabled={this.state.page<=1} className="btn btn-dark mx-3 my-3" onClick={this.handlePreviousClick}> &laquo; Previous </button>
          <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/20)} className="btn btn-dark mx-3 my-3" onClick={this.handleNextClick}> Next &raquo; </button>
        </div>
      </div>
    )
  }
}
