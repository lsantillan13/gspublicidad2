export default Navigation = () => {
    return (
        <header class="fixed w-full z-50 bg-opacity-90 backdrop-blur-md py-3 px-6 bg-[#fcfdfc] border-b-gray-300 shadow-md">
            <div class="flex justify-center pb-4">
                <a href="#" class="text-2xl text-cyan-900 font-bold glitch-text">GS</a>
                <p class="text-neutral-700 text-2xl ml-2 mr-1">|</p>
                <p class="text-2xl font-light text-gray-800">Soluciones Gráficas</p>
            </div>
    
            <section class="container mx-auto justify-between items-center flex">
                <div class="flex justify-start">
                    <button class="hover:text-[#00FFEE] hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </div>
                       
                <nav class="hidden md:flex space-x-8 justify-center">                   
                    <a href="#" class="hover:text-[#4d7294] font-semibold transition-all">HOME</a>
                    <a href="#" class="hover:text-[#4d7294] font-normal transition-all">PRODUCTOS</a>
                    <a href="#" class="hover:text-[#ce7e00] font-normal transition-all">EGRESADOS / MAYORISTAS</a>
                    <a href="#" class="hover:text-[#ce7e00] font-normal transition-all">DISEÑOS CON TU LOGO</a>
                    <a href="#" class="hover:text-[#ce7e00] font-normal transition-all">FAQ</a>
                    <a href="#" class="hover:text-[#4d7294] font-normal transition-all">CONTACTO</a>
                </nav>
                
                <div class="flex justify-start">
                    <button class="hover:text-[#00FFEE]">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
    
                    <button class="hover:text-[#00FFEE] ml-4">
                        <a href="./login.html">
                            <img src="./btn.png" alt="" srcset="" class="h-6 w-6" />
                        </a>
                    </button>
                </div>
            </section>
        </header>
    );
};