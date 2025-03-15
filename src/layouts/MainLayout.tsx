import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Container } from '@mui/material';
type Props = { children: React.ReactNode };

const MainLayout: React.FC<Props> = ({ children }) => { 

    return (
        <>
        <Navbar />
            <Container component="main" sx={{ mt: 4, mb: 4 }}>
            {children}
            </Container>
        <Footer />
        </>
    )    
}
export default MainLayout;
    