<!DOCTYPE html>
<html>
<head>
        <meta charset="utf-8">
        <link rel = "stylesheet" type = "text/css" href= "./css/style0.css">
        <link rel = "stylesheet" type = "text/css" href= "./css/Contact.css">
        <title>Home</title>
    </head>
    <body>
        <header class="background">
        <div class= "wrapper">
            <div class="logo">
                <img src="./images/homepage/logoo.png" alt="shop">
            </div>
            <ul class = "nav-area">
                
                <li><a href ="#about">About</a></li>
                <li><a href ="./php/ProductsPage.php">Products</a></li>
                <li><a href ="#">Cart</a></li>
            </ul>
        </div>
            <div class= "welcome-text">
                <h1> We Sell Pokemons</h1>
                <a href = "#form"> Contact us</a>
            </div>
        </header>

        <!-- About Us -->
        <div id="about" class="background">
                <h1> About us</h1>
				<h2>Hadi's Shop</h2>
				
				<h3>What do we do?</h3>
				<p> </p>
				
				<h3>Our History</h3>
				<p>
				With many years of love for electronics, our aim is to always be the best. This is why we will always be dedicated to providing you with the best supplies at the most competitive prices.</p>
				
				<h3>Our services!</h3>
				<p>Through .... choose the products you want, check and select their specifications, and order all that your heart desires with one click and we will deliver all your needs to you anywhere across Lebanon within one to three working days. </p>
				
				<p>This online delivery service will finally help you save time and avoid traffic jams. We are proud to make all this possible thanks to our delivery team and online payment-processing partner.</p>
            </div>

        <!-- Contact Us -->
        <div class="container">
            <form action="../php/ContactForm.php" method="POST">
                <p>
                    <label for="full name">Full Name:</label>
                    <input type="text" id="full name" name="fullname" placeholder="Your name.." style="width:100%;max-width:250px;" required>
                </p>
                <p>
                    <label for="PhoneNumber">Phone number:</label>
                    <input name="PhoneNumber" id="PhoneNumber" type="text" style="width:100%;max-width:250px;" placeholder="##/######"required />
                </p>
                <p>
                    <label for="FromEmailAddress">Email address:</label>
                    <input name="FromEmailAddress" id="FromEmailAddress" type="text" style="width:100%;max-width:250px;"placeholder="someone@example.com" required/>
                </p>
                <label for="country">Country:</label>
                <select id="country" name="country" required>
                    <option value="Lebanon">Lebanon</option>
                    <option value="Kuwait">Kuwait</option>
                    <option value="Spain">Spain</option>
                    <option value="Australia">Australia</option>
                    <option value="Canada">Canada</option>
                    <option value="Usa">USA</option>
                </select>

                <label for="subject">Subject:</label>
                <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px" required></textarea>

                <input type="submit" value="Submit">

            </form>
        </div>


<!--        <div class="background" id="form">-->
<!--            <form action="../php/ContactForm.php" method="POST">-->
<!--                <p>-->
<!--                  <label for="full name">Full Name:</label>-->
<!--                  <input type="text" id="full name" name="fullname" placeholder="Your name.." style="width:100%;max-width:250px;" required>-->
<!--                </p>-->
<!--                <p>-->
<!--                  <label for="PhoneNumber">Phone number:</label>-->
<!--                  <input name="PhoneNumber" id="PhoneNumber" type="text" style="width:100%;max-width:250px;" placeholder="##/######"required />-->
<!--                </p>-->
<!--                <p>-->
<!--                    <label for="FromEmailAddress">Email address:</label>-->
<!--                    <input name="FromEmailAddress" id="FromEmailAddress" type="text" style="width:100%;max-width:250px;"placeholder="someone@example.com" required/>-->
<!--                </p>-->
<!--                <label for="country">Country:</label>-->
<!--                <select id="country" name="country" required>-->
<!--                    <option value="Lebanon">Lebanon</option>-->
<!--                    <option value="Kuwait">Kuwait</option>-->
<!--                    <option value="Spain">Spain</option>-->
<!--                    <option value="Australia">Australia</option>-->
<!--                    <option value="Canada">Canada</option>-->
<!--                    <option value="Usa">USA</option>-->
<!--                </select>-->
<!---->
<!--                <label for="subject">Subject:</label>-->
<!--                <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px" required></textarea>-->
<!---->
<!--                <input type="submit" value="Submit">-->
<!---->
<!--            </form>-->
<!--        </div>-->

        </div>
    </body>
  </html>
  