import React from 'react';

function Footer() {
    return (
        <footer>
            <div className="container">
                <p>©{(new Date().getFullYear())} vakroddels.nl </p>
            </div>
        </footer>
    );
}

export default Footer;