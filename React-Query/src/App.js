import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import{ QueryClientProvider, QueryClient} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
// import { Router } from 'react-router-dom';
import './App.css';
import { HomePage } from './components/Home.page';
import { RQSuperHeroesPage } from './components/RQSuperHeroes.page';
import { SuperHeroesPage } from './components/SuperHeroes.page';
import { SuperHeroNames } from "./components/SuperHeroesName.page";
import { RQSuperHero } from "./components/RQSuperHero.page";
import { ParallelQueriesPage } from "./components/ParallelQueries.page";
import { DynamicParallelPage } from "./components/DynamicParallel.page";
import { DependentQueriesPage } from "./components/DependentQueries.page";
import { PaginatedQueriesPage } from "./components/PaginatedQueries.page";
import { InfiniteQueriesPage } from "./components/InfiniteQueries.page";
// import Router from 'json-server/lib/server/router';

const queryClient = new QueryClient()

function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
     <Router>
     <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home Page </Link>
          </li>
          <li>
            <Link to="/super-heroes">Traditional Super Heroes</Link>
          </li>
          <li>
            <Link to="/rq-super-heroes">RQ Super Heroes</Link>
          </li>
          <li>
            <Link to="/super-heroes-names">Super Heroes Names</Link>
          </li>
          {/* <li>
            <Link to="/rq-super-hero/:heroId">Super Heroes Names</Link>
          </li> */}
          <li>
            <Link to="/parallel-queries">Parallel Queries Page</Link>
          </li>
          <li>
            <Link to="/rq-dynamic-queries">Dynamic Parallel Page</Link>
          </li>
          <li>
            <Link to="/rq-dependent">Dependent Query</Link>
          </li>
          <li>
            <Link to="/rq-paginated">Paginated Queries Page</Link>
          </li>
          <li>
            <Link to="/rq-infinite">Infinite Queries Page</Link>
          </li>
        </ul>
      </nav>
    </div>
      <Routes>
        <Route path="/super-heroes" element={<SuperHeroesPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/rq-super-heroes" element={<RQSuperHeroesPage />} />
        <Route path="/super-heroes-names" element={<SuperHeroNames/>}/>
        <Route path="/rq-super-hero/:heroId" element={<RQSuperHero/>}/>
        <Route path="/parallel-queries" element={<ParallelQueriesPage/>}/>
        {/* <Route page="/rq-dynamic-queries" element={<DynamicParallelPage heroIds={[1,3]}/>}/> */}
        <Route path="/rq-dynamic-queries" element={<DynamicParallelPage heroIds={[1,3]}/>}/>
        <Route path="/rq-dependent" element={<DependentQueriesPage email='user1@example.com'/>}/>
        <Route path="/rq-paginated" element={<PaginatedQueriesPage/>}/>
        <Route path="/rq-infinite" element={<InfiniteQueriesPage/>}/>
      </Routes>
    </Router>
    <ReactQueryDevtools initialIsOpen={false} position='botton-right'/>
    </QueryClientProvider>
    </>
  );
}

export default App;
