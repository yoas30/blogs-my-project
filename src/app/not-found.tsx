import Image from "next/image";

export default function notFound(){
    return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
        <div>
            <div>
                <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
            </div>
            <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
                Page Not Found
            </div>
        </div>
        <div>
            <Image alt={'not found'} src={'https://cdn2.iconfinder.com/data/icons/whoooa-156-vector-illustrations-and-lottie-animati/1693/not_found_solid_III-1024.png'}
            height={500}
            width={500}
            />
        </div>
    </main>
    )
}