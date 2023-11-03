import Header from "@/components/Header";

export default function App() {

    return (
        <div className="flex-col h-screen max-w-screen-xl py-20 mx-auto overflow-hidden px-28 lg:grid lg:grid-cols-2 bg-slate-900 lg:pt-28 gap-x-3">
            {/* <div className="fixed inset-0 pointer-events-none lg:absolute" style={{
                background: "radial-gradient(500px at top right, rgba(101, 163, 13, 0.4), transparent)",
            }} /> */}
            <Header />
            <div>Content</div>
        </div>
    );
}
