import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Layout from './Layout';
import Categories from './Categories';
import Brand from './Brand';
import Deals from './Deals';
import Accountsignin from './Accountsignin';
import Accountlogin from './Accountlogin';
import Addtocart from './Addtocart';
import Age from './Age';
import Search from './Search';
import Dashboard from './Dashboard';
import About from './About';
import Shop from './Shop';
import Liked from './Liked';

import Toyandgames from './Toysandgames';
import {Angrybirdchr,Anna, Avengers, Barbiechr, Batman, Doraemon, Ironman, Loonetunes, Mickeymouse, Motupatlu, Pikachu, Rapunzel, Spiderman, Toys, Unicorn} from "./Product";
import {Sports} from "./Product";
import {Strollers} from "./Product";
import {Cycles} from "./Product";
import {School} from "./Product";
import {Softtoys} from "./Product";
import {Gadgets} from "./Product";
import {Gifts} from "./Product";
import {Personalcare} from "./Product";

import Hasbro from './Hasbro';
import {Hasbrocom} from './Product';
import {Funskool} from "./Product";
import {Chicco} from "./Product";
import {Himalya} from "./Product";
import {Barbie} from "./Product";
import {Meemee} from "./Product";
import {Mamaearth} from "./Product";
import {Maisto} from "./Product";
import {Johnsonbaby} from "./Product";
import {Pigeon} from "./Product";

import Angrybird from './Angrybird';

import One from './One';
import { First } from './Product';
import { Second } from './Product';
import { Third } from './Product';
import { Fourth } from './Product';
import { Fifth } from './Product';
import { More } from './Product';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="categories" element={<Categories />} />
          <Route path="brand" element={<Brand />} />
          <Route path="age" element={<Age />} />
          <Route path="search" element={<Search />} />
          <Route path="deals" element={<Deals />} />
          <Route path="signin" element={<Accountsignin />} />
          <Route path="login" element={<Accountlogin />} />
          <Route path="addtocart" element={<Addtocart />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="about" element={<About />} />
          <Route path="shop" element={<Shop />} />
          <Route path="liked" element={<Liked />} />

          <Route path="tng" element={<Toyandgames  product={Toys}/>} />
          <Route path="sports" element={<Toyandgames  product={Sports}/>} />
          <Route path="strollers" element={<Toyandgames  product={Strollers}/>} />
          <Route path="cycles" element={<Toyandgames  product={Cycles}/>} />
          <Route path="school" element={<Toyandgames  product={School}/>} />
          <Route path="softtoys" element={<Toyandgames  product={Softtoys}/>} />
          <Route path="gadgets" element={<Toyandgames  product={Gadgets}/>} />
          <Route path="gifts" element={<Toyandgames  product={Gifts}/>} />
          <Route path="personalcare" element={<Toyandgames  product={Personalcare}/>} />

          <Route path="hasbro" element={<Hasbro  product={Hasbrocom}/>} />
          <Route path="funskool" element={<Hasbro  product={Funskool}/>} />
          <Route path="chicco" element={<Hasbro  product={Chicco}/>} />
          <Route path="himalya" element={<Hasbro  product={Himalya}/>} />
          <Route path="barbie" element={<Hasbro  product={Barbie}/>} />
          <Route path="meemee" element={<Hasbro  product={Meemee}/>} />
          <Route path="mamaearth" element={<Hasbro  product={Mamaearth}/>} />
          <Route path="maisto" element={<Hasbro  product={Maisto}/>} />
          <Route path="johnsonbaby" element={<Hasbro  product={Johnsonbaby}/>} />
          <Route path="pigeon" element={<Hasbro  product={Pigeon}/>} />

          <Route path="angrybird" element={<Angrybird  product={Angrybirdchr}/>} />
          <Route path="anna" element={<Angrybird  product={Anna}/>} />
          <Route path="avengers" element={<Angrybird  product={Avengers}/>} />
          <Route path="barbie" element={<Angrybird  product={Barbiechr}/>} />
          <Route path="batman" element={<Hasbro  product={Batman}/>} />
          <Route path="spiderman" element={<Angrybird  product={Spiderman}/>} />
          <Route path="doraemon" element={<Angrybird  product={Doraemon}/>} />
          <Route path="ironman" element={<Angrybird  product={Ironman}/>} />
          <Route path="loonetunes" element={<Angrybird  product={Loonetunes}/>} />
          <Route path="mickeymouse" element={<Angrybird  product={Mickeymouse}/>} />
          <Route path="motupatlu" element={<Angrybird  product={Motupatlu}/>} />
          <Route path="pikachu" element={<Angrybird  product={Pikachu}/>} />
          <Route path="rapunzel" element={<Angrybird  product={Rapunzel}/>} />
          <Route path="unicorn" element={<Angrybird  product={Unicorn}/>} />

          <Route path="one" element={<One  product={First}/>} />
          <Route path="two" element={<One  product={Second}/>} />
          <Route path="three" element={<One  product={Third}/>} />
          <Route path="four" element={<One  product={Fourth}/>} />
          <Route path="five" element={<One  product={Fifth}/>} />
          <Route path="more" element={<One  product={More}/>} />
        </Route>
      </Routes>
    </BrowserRouter >
  )
}

export default App;