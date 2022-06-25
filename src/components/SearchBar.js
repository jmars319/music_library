import React from 'react';

function SearchBar(props){
    return (
            <form>
                <input type="text" placeholder="Search Here"
                    onChange={
                        (e) => props.handleSearch(e, e.target.value)
                    } />
                <input type="submit" />
            </form>
    )
}

export default SearchBar