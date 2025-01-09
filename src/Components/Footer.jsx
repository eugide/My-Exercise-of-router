
function Footer() {
  return (
    <div className="bg-black py-[100px] flex justify-center gap-3 text-white">
        <p>SPACEX &copy; {new Date().getFullYear()}</p>
        <div>
          <ul className="flex gap-3 cursor-pointer">
            <li className="hover:text-gray-400">Twiter</li>
            <li className="hover:text-gray-400">YouTub</li>
            <li className="hover:text-gray-400">Instagram</li>
            <li className="hover:text-gray-400">Flickr</li>
            <li className="hover:text-gray-400">LinkdIn</li>
            <li className="hover:text-gray-400">Privacy</li>
            <li className="hover:text-gray-400">Suppliers</li>
          </ul>
        </div>

    </div>
  )
}

export default Footer