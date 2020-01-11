import React from 'react';
import mainImage from '../assets/Image/kuliner.jpg';

const Image = () => (
    <div className='container'>
    <div className='container-fluid'>
        <div className='row' style={{marginBottom: 30, marginTop: 30}}>
          <img src={ mainImage } width='100%' height='20%' alt="kuliner"></img>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <div className='card text-white bg-dark mb-3 text-center'>
            <div className='card-header'><h1>Selamat Datang di Pimakassar Food</h1></div>
            <div className='card-body'>
              <h4 className='card-title'>Cara termudah untuk menemukan makanan yang komplit</h4>
              <p className='card-text'>Anda dapat mengetahui informasi tentang masakan Pimakassar Food</p>
              <p className='card-text'>Mulailah dengan memilih kota kota unggulan di sini</p>
            </div>
          </div>
        </div>
      </div>
      </div>
)

export default Image;