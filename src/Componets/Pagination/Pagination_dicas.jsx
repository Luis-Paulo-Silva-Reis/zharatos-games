import "./pagination.css";
// import "../Post/Post.css";
import React, { PureComponent } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";

export class FirstComponents extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      offset: 0,
      tableData: [],
      orgtableData: [],
      perPage: 10,
      currentPage: 0,
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.loadMoreData();
      }
    );
  };

  loadMoreData() {
    const data = this.state.orgtableData;

    const slice = data.slice(
      this.state.offset,
      this.state.offset + this.state.perPage
    );
    this.setState({
      pageCount: Math.ceil(data.length / this.state.perPage),
      tableData: slice,
    });
  }

  componentDidMount() {
    this.getData();
  }
  // https://zharatosgames.com/db
  //"https://jsonplaceholder.typicode.com/posts"
  getData() {
    axios.get("https://db.zharatosgames.com/dicas.json").then(res => {
      var data = res.data;

      var slice = data.slice(
        this.state.offset,
        this.state.offset + this.state.perPage
      );

      this.setState({
        pageCount: Math.ceil(data.length / this.state.perPage),
        orgtableData: res.data,
        tableData: slice,
      });
    });
  }

  render() {
    return (
      <div>
        {this.state.tableData.map((tdata, i) => (
          // <div className="container-post">
          <div className="bgimg">
            <div className="linha">
              <img src={tdata.img} />
          </div>

          <div className="collum">
              <h2 className="title-post">{tdata.title}</h2>
              <p className="Texto-post">{tdata.body}</p>
              <div className="More-post">
                  <a className="Tomator" href={tdata.url}> LEIA MAIS </a>
              </div>
          </div>
        </div>
  // </div>
))}

        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
    );
  }
}

export default FirstComponents;
