import React from 'react';

const Category = props => (
    props.categories ? (
        <div className='list-group'>
            {props.categories.map(category => (
                <button key={category.id}
                className={'list-group-item list-group-item-action ' + (props.categorySelected && category.id === props.categorySelected.id ? 'active' : '')}
                    onClick={() => props.categoryClickHandler(category)}
                    >
                    {category.name}
                    </button>
            ))}
        </div>
    ) : (
        <p>Loading...</p>
    )
);

export default Category;