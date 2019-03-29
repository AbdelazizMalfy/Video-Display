import React from 'react';



class SearchBar extends React.Component {
    
    state = {term : ''}

    onInputChange = (event) => {
        this.setState({term:event.target.value})
    }
    
    onFormSubmit = (event) => {
        event.preventDefault()


        this.props.onTermSubmit(this.state.term)
    }
    
    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input 
                placeholder="Search" 
                className="form-control" 
                type="text"
                value={this.state.term}
                onChange={this.onInputChange} />
            </form>
        )
    }
}

export default SearchBar;