import './AdminDashboard.css'

function AdminDashboard() {
  return (
    <div>
        <h1 className="text-center pt-4">नमस्ते 🙏 Admin</h1><hr />
        <div className='container'>
          <div className='row'>
            <div className='col-3'>
              <ul class="list-group">
                <li className='list-none'>Order Information</li>
                <li className='list-none'>Mobile Information</li>
                <li className='list-none'>Laptop Information</li>
                <li className='list-none'>Tablet Information</li>
                <li className='list-none'>Contact</li>
                <li className='list-none'>Review</li>
              </ul>
            </div>
            <div className='col-9'>
              content
            </div>
          </div>
        </div>
    </div>
  )
}

export default AdminDashboard