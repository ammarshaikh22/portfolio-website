"use client"
const DownloadButton = ({className}:any) => {
    const handleDownload = () => {
        const fileUrl = "/cv.pdf"; // Path relative to the public folder
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = "cv.pdf"; // This will be the default filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <div className={`${className} mt-6`}>
            <button onClick={handleDownload} className='bg-yellow-500 rounded-3xl py-2 border-none font-semibold w-[152px] h-[50px] text-sm text-black' >DOWNLOAD CV</button>
        </div>
    )
}

export default DownloadButton