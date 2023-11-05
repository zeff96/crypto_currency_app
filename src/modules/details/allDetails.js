// import { useParams } from 'react-router-dom';
// import useGetCoinsQuery from '../../redux/coins/coinsSlice';
// import Details from './details';
// import Header, { Detailspagenav } from '../navbar/header';
// import logo from '../../asset/bitcoin.svg';

// export default function Alldetails() {
//   const { id } = useParams();

//   return (
//     <div className="container my-5 pt-5">
//       <Header>
//         <Detailspagenav />
//       </Header>
//       <div className="mb-3 d-flex align-items-center">
//         <div>
//           <img src={logo} alt="binance-svg" style={{ width: '15rem' }} />
//         </div>
//         <div>
//           <span className="text-white fs-2">
//             CRYPTO
//             <br />
//             CURRENCY
//             <br />
//             DATA
//           </span>
//         </div>
//       </div>
//       <hr className="text-white" />
//       {status === 'loading' && <h3>Loading...</h3>}
//       {error && <h3>{error.message}</h3>}
//       {detail && <Details key={detail.id} detail={detail} />}
//     </div>
//   );
// }
