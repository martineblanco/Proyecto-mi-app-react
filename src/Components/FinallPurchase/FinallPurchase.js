import { useContext, useState } from 'react';
import './FinalPurchase.css';
import { CartContext } from '../Context/CartContext';
import { TextField } from '@mui/material';
import { db } from '../FirebaseConfig/FirebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const initial = {
    name: '',
    email: '',
    tel: '',
    dir: '',
};

const FinalPurchase = () => {

    const { cart, clearCart, total } = useContext(CartContext);
    const [values, setValues] = useState(initial);
    const [purchaseId, setPurchaseId] = useState('');
    const [check, setCheck] = useState(false);
    const fecha = new Date();
    const navigate = useNavigate()

    const handleOnChange = (e) => {
        const { value, name } = e.target;
        setValues({ ...values, [name]: value })
        handleOperation();
    }

    const orden = () => {
        const items = [];
        cart.forEach((item) => items.push({ id: item.id, title: item.name, }))
        return items;
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const items = orden();
        const total2 = total();
        addDoc(collection(db, 'orders'), { values, items, fecha, total2 })
            .then(res => setPurchaseId(res.id))
            .catch(error =>
                console.log(error)
            )

        setTimeout(() => {
            setPurchaseId('')
            setValues(initial)
            clearCart()
            navigate('/')
        }, 20000);
    };

    const handleOperation = () => {
        if (values.name !== '' && values.email !== '' && values.tel !== '' && values.dir !== '') {
            setCheck(true);
        }
    }

    return (
        <div>
            {purchaseId === '' ? (
                <>
                    <form className='form' onSubmit={onSubmit}>
                        <h2 className='title-form'>Ingrese sus Datos:</h2>
                        <h3>Los siguientes campos son requeridos <span className='required'>*</span></h3>
                        <TextField
                            placeholder='Nombre'
                            style={{ margin: 10, width: 400 }}
                            name='name'
                            value={values.name}
                            onChange={handleOnChange}
                        />
                        <TextField
                            placeholder='Email'
                            style={{ margin: 10, width: 400 }}
                            name='email'
                            value={values.email}
                            onChange={handleOnChange}
                        />
                        <TextField
                            placeholder='Telefono'
                            style={{ margin: 10, width: 400 }}
                            name='tel'
                            value={values.tel}
                            onChange={handleOnChange}
                        />
                        <TextField
                            placeholder='Direccion'
                            style={{ margin: 10, width: 400 }}
                            name='dir'
                            value={values.dir}
                            onChange={handleOnChange}
                        />
                        {check && <button className='btnEnd'>Confirmar Compra</button>}
                    </form>
                </>
            ) : (
                <div className='terminar'>
                    <article>
                        {`El/La cliente/a ${values.name.toLocaleUpperCase()} realizo el dia 
                        ${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}
                        de manera satisfactoria, en la tienda online de "Intech Hardware", la compra de: `}
                    </article>
                    {cart.map((e) => {
                        return (
                            <table key={e.id} className='table-compra'>
                                <th>#</th>
                                <th>{e.cant}</th>
                                <th>{e.name}</th>

                            </table>
                        )
                    })
                    }
                    <article>
                        {`Listos para ser entregados dentro de las proximas 72hs habiles al domicilio
                        ${values.dir.toLocaleUpperCase()}. Numero de contacto ${values.tel}`}
                    </article>
                    <h2 className='h2-ticket'>Total de la compra: ${total()}</h2>
                    <h2 className='h2-ID'>ID compra: {purchaseId}</h2>
                </div>
            )}
        </div>
    )
}

export default FinalPurchase