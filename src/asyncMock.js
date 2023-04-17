const products = [
    {
        id: '1',
        name: 'Notebook Asus X512j',
        price: 4000000,
        category: 'notebook',
        img:'https://http2.mlstatic.com/D_NQ_NP_861425-MLA44971552570_022021-V.webp',
        stock: 30,
        description: 'Notebook Asus X512j Core I5 10ma 8gb Ssd 512gb 15,6 Freedos'
    },
    {
        id: '2',
        name: 'Notebook Hp 17.3',
        price: 350000,
        category: 'notebook',
        img:'https://http2.mlstatic.com/D_NQ_NP_628222-MLA44191346245_112020-V.webp',
        stock: 30,
        description: 'Notebook Hp 17.3 Amd Ry-zen 5 256gb Ssd 12gb Ddr4 Radeon W10'
    },
    {
        id: '3',
        name: 'Notebook Lenovo V15',
        price: 370000,
        category: 'notebook',
        img:'https://http2.mlstatic.com/D_NQ_NP_836891-MLA50046840779_052022-V.webp',
        stock: 30,
        description: 'Notebook Lenovo V15 Core I5 10ma Gen Ssd 240gb 20gb 15.6'
    },
    {
        id: '4',
        name: 'Pc Escritorio Armada I7',
        price: 175000,
        category: 'pc escritorio',
        img:'https://http2.mlstatic.com/D_NQ_NP_814120-MLA48000444210_102021-W.webp',
        stock: 30,
        description: 'Pc Escritorio Armada I7 16 Gigas Ssd 240 Gab Wi Fi Teclado y Mouse'
    },
    {
        id: '5',
        name: 'Pc Escritorio Armada I5',
        price: 90000,
        category: 'pc escritorio',
        img:'https://http2.mlstatic.com/D_NQ_NP_711170-MLA31113816812_062019-W.webp',
        stock: 30,
        description: 'Pc Escritorio Armada I5 1tb Ssd 240 8gb Ram Gabinete (oulet) w10'
    },
    {
        id: '6',
        name: 'Pc Gamer Ryzen 7',
        price: 455000,
        category: 'pc escritorio',
        img:'https://http2.mlstatic.com/D_NQ_NP_870890-MLA51539723860_092022-W.webp',
        stock: 30,
        description: 'Pc Escritorio Gamer Ryzen 7 5700g 16gb Radeon 256gb Nvme Rgb 550w 80plus'
    },
    {
        id: '7',
        name: 'Monitor gamer Samsung',
        price: 70000,
        category: 'monitor',
        img:'https://http2.mlstatic.com/D_NQ_NP_973781-MLA48131216539_112021-W.webp',
        stock: 30,
        description: 'Monitor gamer Samsung F24T35 led 24" azul y gris oscuro 100V/240V'
    },
    {
        id: '8',
        name: 'Monitor gamer LG',
        price: 108000,
        category: 'monitor',
        img:'https://http2.mlstatic.com/D_NQ_NP_845070-MLA46623210425_072021-W.webp',
        stock: 30,
        description: 'Monitor gamer LG UltraGear 24GN600 led 24" negro 100V/240V'
    },
    {
        id: '9',
        name: 'Monitor gamer Philips',
        price: 86000,
        category: 'monitor',
        img:'https://http2.mlstatic.com/D_NQ_NP_990408-MLA52364993901_112022-W.webp',
        stock: 30,
        description: 'Monitor gamer Philips 27 Curvo 271e1sca/55'
    },

]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500) 
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === productCategory))
        }, 500) 
    })
}