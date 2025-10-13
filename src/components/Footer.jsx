import Container from "./Container";

export default function Footer() {
    return(
        <>
         <footer className="bg-gray-900">
            <Container className="flex-center py-8 flex-col space-y-4">
                <p className="text-base text-white">&copy; 2021 - 2025 Nails By Betty | All rights reserved</p>

                <div className="flex-center">
                    <span className="text-xs text-gray-100 max-w-xl text-center">Some images on this site are sourced from <a href="https://freepik.com" rel="noopener noreferrer" className="underline hover:no-underline">Freepik</a> and <a href="https://pinterest.com" rel="noopener noreferrer" className="underline hover:no-underline">Pinterest</a>. All rights to these images remain with their respective creators Made by <a href="https://github.com/AwaniCaleb/" rel="noopener noreferrer" className="underline hover:no-underline">Awani Caleb</a> & <a href="https://github.com/typical-developer/" rel="noopener noreferrer" className="underline hover:no-underline">Chris Nzenwata</a> with 🧡 and ☕</span> </div>
            </Container>
        </footer>
        </>
    );
}