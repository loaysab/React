import React, { Component } from 'react';

class TableHeader extends Component {

    raiseSort = path => 
    {
      var newColumn = {...this.props.sortColumn};
      if(newColumn.path === path)
      {
        newColumn.order === "asc" ? newColumn.order = "desc" : newColumn.order = "asc";
      }
      else
      {
        newColumn.path = path;
        newColumn.order = "asc";
      }
      this.props.onSort(newColumn);
    }
    renderSortIcon = col =>
    {
      const {sortColumn}= this.props
      if(col.path !== sortColumn.path) return null;
      if(sortColumn.order === "asc") return <i className="fa fa-sort-asc"></i>;
      return <i className="fa fa-sort-desc"></i>
    };


    render() {
        return (
            <thead>
                <tr>
                    {this.props.columns.map(col =>
                        <th className="clickable" key={col.label || col.key} onClick={()=> this.raiseSort(col.path)}>{col.label} {this.renderSortIcon(col)}</th>
                    )}
                </tr>
            </thead>
        );
    }
}

export default TableHeader;