import SidePanel from '../SidePanel/SidePanel';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="app-container">
      <SidePanel />
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default Layout;