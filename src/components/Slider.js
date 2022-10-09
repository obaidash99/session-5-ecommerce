import './Slider.css';

function Slider() {
	return (
		<>
			<div
				id="carouselExampleControls"
				className="carousel slide"
				data-bs-ride="carousel"
			>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img
							src="https://www.briansolis.com/wp-content/uploads/2022/01/eCommerce-Website-Components-photo.jpg"
							className="d-block w-100 height-500"
							alt="...one"
						/>
					</div>
					<div className="carousel-item">
						<img
							src="https://media.istockphoto.com/photos/online-shopping-and-payment-man-using-tablet-with-shopping-cart-icon-picture-id1206800961?k=20&m=1206800961&s=612x612&w=0&h=hcPoUKhWtzHXR3PIAHVgPVZDZaO7R8yZ1wNPkUSsgwU="
							className="d-block w-100 height-500"
							alt="...two"
						/>
					</div>
					<div className="carousel-item">
						<img
							src="https://www.sendiancreations.com/wp-content/uploads/2019/07/e-commerce-business-1024x683.jpg"
							className="d-block w-100 height-500"
							alt="...three"
						/>
					</div>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleControls"
					data-bs-slide="prev"
				>
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleControls"
					data-bs-slide="next"
				>
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
		</>
	);
}

export default Slider;
