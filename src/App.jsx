import React from 'react';
import './style.css';
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Button } from './components/Button';

export default function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <div>
        <header>
          <h1 className="main-banner">Quizz z wiedzy o prawie</h1>
        </header>

        <main className="container mb-4">
          <nav className="navstyle nav nav-pills mb-4">
            <li className="nav-item">
              <NavLink
                to="/quizz/"
                className={'nav-link'}
                activeclassname={'active'}
              >
                Home
              </NavLink>
            </li>
            <NavLink
              to="/quizz/nauka"
              className={'nav-link'}
              activeclassname={'active'}
            >
              Nauka
            </NavLink>
            <NavLink
              to="/quizz/test"
              className={'nav-link'}
              activeclassname={'active'}
            >
              Test
            </NavLink>
          </nav>

          <Outlet />

          {pathname === '/quizz/' && (
            <>
              <div className="d-flex justify-content-center">
                <span>Aby rozpocząć wybierz tryb: </span>
                <Button
                  className="btn btn-primary btn-lg"
                  onClick={() => navigate("../quizz/nauka")}
                >
                  <span role="img" aria-label="book">📖  </span>
                  Nauka
                </Button>
                <Button
                  className="btn btn-primary btn-lg"
                  onClick={() => navigate("../quizz/test")}
                >
                  <span role="img" aria-label="fire">🔥  </span>
                  Test
                </Button>
              </div>
            </>
          )}
        </main>
      </div>
    </>
  );
}
