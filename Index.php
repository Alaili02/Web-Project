<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <link rel = "stylesheet" type = "text/css" href= "./css/Primary.css">
    <link rel = "stylesheet" type = "text/css" href= "./css/NavBar.css">
    <link rel = "stylesheet" type = "text/css" href= "./css/LoginBox.css">
    <link rel = "stylesheet" type = "text/css" href= "./css/Cart.css">
    <link rel = "stylesheet" type = "text/css" href= "./css/SideMenu.css">
    <link rel = "stylesheet" type = "text/css" href= "./css/MainContent.css">
    <link rel = "stylesheet" type = "text/css" href= "./css/style0.css">
    <link rel = "stylesheet" type = "text/css" href= "./css/Contact.css">

    <script src = "./js/Dynamic.js" defer></script>
    <script src = "./js/Cart.js" defer></script>
    <title>Home</title>
</head>
<body>
    <!--- NavBar --->
    <div id = "NavBar">
        <div id = "SideButton">
            <img src="./images/icons/menu_black.png" alt=""/>
        </div>
        <div id = "logo">
            <a href = "./Index.php">Home</a>
        </div>

        <button onclick="window.location='#ContactUsForm'">Contact Us</button>

        <button onclick="window.location='./php/ProductsPage.php'">Products</button>
        <?php
//        $RemoveCookie = 'document.cookie = "LoggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"';
//        if (isset($_COOKIE['LoggedIn'])) {
//            echo "onclick= '$RemoveCookie;location.reload();'>".$_COOKIE['LoggedIn'];
//        } else {
//            echo ' onclick="ShowLogin()">Login';
//        }

        $RemoveCookie = 'document.cookie = "LoggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"';
        if (isset($_COOKIE['LoggedIn'])) {
            echo "<button >" . $_COOKIE['LoggedIn']."</button>";
            echo "<button onclick= '$RemoveCookie;location.reload();'>Log Out</button>";
        } else {
            echo '<button onclick="ShowLogin()">Login</button>';
        }
        ?>
        <button id = "CartBtn">Cart</button>
    </div>

    <!--- SideMenu --->
    <div id = "SideMenu">
        <ul>
            <li class = "dropDown">Video Games</li>
            <li class = "dropDown">Home Products</li>
            <li class = "dropDown">Electronics</li>
            <li class = "dropDown">Others</li>
        </ul>
    </div>


    <div id="MainContent">
        <h1>Welcome to Ecommerce Store</h1>
        <div class="productsAboutContainer">
            <!-- About Us -->
            <p>With many years of love for electronics, our aim is to always be the best. This is why we will always be dedicated to providing you with the best supplies at the most competitive prices.</p>
            <h1>Staff</h1>
            <p>201901052 - Mohamad Alaili</p>
            <p>201901490 - Khaled Sardouk</p>
            <p>201901076 - Mohammad Al-Tayyeb Soubra</p>
            <p>201900774 - Hadi Salloum</p>
            <h1> About us</h1>
            <div class="box">
                <div>
                    <img alt="" src="./images/icons/customerProtection.png">
                    <p>Customer Protection</p>
                </div>

                <div>
                    <img alt="" src="./images/icons/delivery.png">
                    <p>Free Delivery</p>
                </div>

                <div>
                    <img alt="" src="./images/icons/transactions.png">
                    <p>Secure Transactions</p>
                </div>

                <div>
                    <img alt="" src="./images/icons/wallet.png">
                    <p>Excellent Prices</p>
                </div>
            </div>
            <p>Through .... choose the products you want, check and select their specifications, and order all that your heart desires with one click and we will deliver all your needs to you anywhere across Lebanon within one to three working days. </p>

            <p>This online delivery service will finally help you save time and avoid traffic jams. We are proud to make all this possible thanks to our delivery team and online payment-processing partner.</p>
        </div>
        <!-- Contact Us -->
        <div>
            <form id="ContactUsForm" action="./php/ContactForm.php" method="POST">
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
    </div>

    <!--- Cart --->
    <div id="cart" class="cart">
        <table id="cart1">
            <thead>
            <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Remove</th>
            </tr>
            </thead>
            <tbody id ="ProductsCartBody">
            </tbody>
            <tfoot>
            <tr>
                <td colspan="2" id="total">Total: $0.00</td>
                <td colspan="3" id = "CheckOut">
                    <button>Check Out</button>
                </td>
            </tr>
            </tfoot>
        </table>
    </div>

    <!--- Login --->
    <div id="loginBox">
        <h1>Login</h1>
        <Form method ="POST" action = "./php/login.php" autocomplete="on" onsubmit="Login()">
            <div class="formElement">
                <span>Username</span>
                <input type="text" name = "username" id = "UsernameInput" placeholder= "Username" required>
            </div>
            <div class="formElement" >
                <span>Password:</span>
                <input type="password" name ="Password" placeholder = "Password" required>
            </div>
            <input type="submit" value="Login">
            <input type="button" onclick="window.location.href='./pages/Form2.html';" value="No account? Register here" >
        </Form>
    </div>

</body>
</html>