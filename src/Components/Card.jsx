'use client'
import React from 'react';
import { Card } from 'antd';
import Image from 'next/image';

const { Meta } = Card;

const App = () => (
  <Card
    hoverable
    style={{
      width: 240,
      height: 200
    }}
    cover={
      <Image
        alt="example"
        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        width={240}  // Set the desired width for the image
        height={160} // Set the desired height for the image
        style={{ objectFit: 'cover' }} // Optional: To maintain aspect ratio and fit the container
      />
    }
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
);

export default App;
