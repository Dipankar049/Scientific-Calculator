import React, { Component } from 'react'
import NewsItem from './components/NewsItem'
import Navbar from './components/Navbar'
import About from "./components/About";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

export class News extends Component {
    articles = [
        {
        "source": {
        "id": "entertainment-weekly",
        "name": "Entertainment Weekly"
        },
        "author": "https://www.facebook.com/entertainmentweekly",
        "title": "'Young and the Restless' favorites Cricket and Danny headed to 'Bold and the Beautiful'",
        "description": "'Young and the Restless' favorites Cricket and Danny — played by Lauralee Bell and Michael Damian, respectively — are crossing over to another CBS daytime soap, 'The Bold and the Beautiful.'",
        "url": "https://ew.com/young-and-the-restless-cricket-danny-bold-and-the-beautiful-crossover-8670972",
        "urlToImage": "https://ew.com/thmb/AABAIwIn3lKQBf0nS4SIVKLoC-A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Lauralee-Bell-Michael-Damian-062724-00184c8a903b4382bb4230e64340c0a8.jpg",
        "publishedAt": "2024-06-28T00:52:18.1523992Z",
        "content": "Goodbye, Genoa City, and hello, Los Angeles! Young and the Restless favorites Cricket and Danny played by Lauralee Bell and Michael Damian are temporarily heading to another CBS daytime soap, The Bo… [+1971 chars]"
        },
        {
        "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
        "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
        "publishedAt": "2020-04-27T11:41:47Z",
        "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
        "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
        "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
        "publishedAt": "2020-03-30T15:26:05Z",
        "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
        ]
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1

        }
    }
    
    async componentDidMount() {
        console.log("From fetch");
        let url = "https://newsapi.org/v2/everything?q=tesla&from=2024-06-02&sortBy=publishedAt&apiKey=f4119a5ed1fe481ca4f9564cd836f7a4&page=1&pageSize=20";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles: parsedData.articles});
    }
    render() {
        const handlePrev = async () => {
            let url = `https://newsapi.org/v2/everything?q=tesla&from=2024-06-02&sortBy=publishedAt&apiKey=f4119a5ed1fe481ca4f9564cd836f7a4&page=${this.state.page - 1}&pageSize=20`;
            let data = await fetch(url);
            let parsedData = await data.json();

            this.setState({
                page: this.state.page - 1,
                articles: parsedData.articles
            })
            console.log("prev");
        }

        const handleNext = async () => {
            let url = `https://newsapi.org/v2/everything?q=tesla&from=2024-06-02&sortBy=publishedAt&apiKey=f4119a5ed1fe481ca4f9564cd836f7a4&page=${this.state.page + 1}&pageSize=20`;
            let data = await fetch(url);
            let parsedData = await data.json();

            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles
            })
            console.log("Next");
        }
        return (
            <>  
                <Router>
                <Navbar title="E News"/>
                <Routes>
                  <Route exact path="/about"
                  element={<About />}
                  ></Route>
                  <Route exact path="/"
                  element={<div className='container my-3'>
                                
                                <h2>Top Headlines</h2>
                                <div className="row">
                                {this.state.articles.map((element)=> {
                                    return <div className="col-md-3 my-3" key={element.url}>
                                        <NewsItem title2={element.title?element.title.slice(0, 45):""} desc={element.description?element.description.slice(0, 88):""} url={element.urlToImage} newsUrl={element.url}/>
                                    </div>
                                })}
                                
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <button disabled={this.state.page <= 1} className='btn btn-primary' onClick={handlePrev}>&larr; Prev</button>
                                    <button className='btn btn-primary' onClick={handleNext}>Next &rarr;</button>
                                </div>
                            </div>}
                  ></Route>
                </Routes>
                
                </Router>
            </>
          )
    }
  
}

export default News;