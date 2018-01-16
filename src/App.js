import React, { Component } from 'react';
import './App.css';
import {
  InstantSearch,
  SearchBox,
  RefinementList,
  SortBy,
  Stats,
  Pagination,
  Highlight,
  Menu,
  // ClearAll,
  Hits,
} from 'react-instantsearch/dom';



const Hit = ({hit}) => {
  console.log(hit);
  return (
    <div className="hit">
      <div className="hit-image">
        <img src={hit.image}/>
      </div>
      <div className="hit-content">
        <div className="hit-price">
          ${hit.price}
        </div>
        <div className="hit-name">
          <Highlight attributeName="name" hit={hit} />
        </div>
        <div className="hit-description">
          <Highlight attributeName="description" hit={hit} />
        </div>
      </div>
    </div>
  );
}

const SideBar = () => {
  return (
    <div className="sidebar">
      <h5>Categories</h5>
      <RefinementList attributeName='categories'/>
      <h5>Brand</h5>
      <RefinementList attributeName='brand' withSearchBox/>
      <h5>Type</h5>
      <Menu attributeName='type'/>
    </div>
  );
}

const Content = () => {
  return (
    <div className="content">
      <div className="info">
        <Stats/>
        <SortBy 
          defaultRefinement = 'instant_search'
          items ={[
            {value: 'instant_search', label: 'Most Relevant'},
            {value: 'instant_search_price_asc', label: 'Lowest Price'},
            {value: 'instant_search_price_desc', label: 'Highest Price'},
          ]}
        />
      </div>
      <Hits hitComponent={Hit} />
      <div className="pagination">
          <Pagination showLast />
      </div>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <InstantSearch
        apiKey="6be0576ff61c053d5f9a3225e2a90f76"
        appId="latency"
        className="container-fluid"
        // createURL={props.createURL}
        indexName="instant_search"
        // onSearchStateChange={props.onSearchStateChange}
        // searchParameters={{ hitsPerPage: 10 }}
        // searchState={props.searchState}
      >
        {/* Search widgets will go there */}
        <header className='header'>
          <SearchBox translations={{placeholder: 'Search for products'}}/> 
        </header>
        <main>
          <SideBar/>
          <Content/>
        </main>
      </ InstantSearch>
    );
  }
}

export default App;
