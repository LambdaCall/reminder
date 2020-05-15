import React from 'react';

// Styling done by tailwind
export class Card extends React.Component {
    

    render() {
        return (
            <div className="max-w-lg min-w-full rounded overflow-hidden shadow-lg "  >        
                <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{this.props.title}</div>
                <p className="text-gray-700 text-base">
                    {this.props.content}
                </p>
                </div>
                <div className="px-6 py-4">
                {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">{this.props.id}</span> */}
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={ () => this.props.delete(this.props.id)}>
                    Delete
                </button>
                </div>
            </div>
            )
        }
}
