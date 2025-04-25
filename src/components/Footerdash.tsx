export default function Footer() {
    return (
        <footer className="bg-white text-center py-4 border-t text-sm text-gray-500">
            &copy; {new Date().getFullYear()} ProjectTask. All rights reserved.
            <span>By</span>
            <a
                href="https://github.com/ZansOne1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 font-medium"
            >
                @zansone1
            </a>
        </footer>
    );
}
