import React from 'react';

// Styling done by tailwind
export class Card extends React.Component {
    
    constructor(props){
        super(props)
    }

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
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span> */}
                </div>
            </div>
            )
        }
}
