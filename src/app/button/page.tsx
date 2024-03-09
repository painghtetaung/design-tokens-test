import Image from "next/image";

export default function Button() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="w-[200px] h-[50px] bg-btnPrimary flex place-items-center justify-center rounded-primaryRadius">Submit</div>
        </main>
    );
}
