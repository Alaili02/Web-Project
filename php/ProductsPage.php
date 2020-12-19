<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="../css/style1.css">
    <link rel="stylesheet" type="text/css" href="../css/NavBar.css">
    <link rel="stylesheet" type="text/css" href="../css/SideMenu.css">
    <link rel="stylesheet" type="text/css" href="../css/MainContent.css">
    <link rel="stylesheet" type="text/css" href="../css/Items.css">
    <link rel="stylesheet" type="text/css" href="../css/Cart.css">
    <script type = "text/javascript" src = "../js/Cart.js" defer></script>
    <script src = "../js/Dynamic.js" defer></script>
    <title>Products</title>
</head>
<body>
    <!--- NavBar --->
    <div id = "NavBar">
        <div id = "SideButton">
            <img src="../images/icons/menu_black.png" alt=""/>
        </div>
        <div id = "logo">
            <a href = "../Index.php">Home</a>
        </div>
        <button onclick="window.location.href='../pages/Form2.html';">Register</button>
        <button onclick="ShowLogin()">Login</button>
        <!-- <button id = "CartBtn" onclick="CartToggle()">Cart</button> -->
        <button id = "CartBtn">Cart</button>
    </div>

    <!--- SideMenu --->
    <div id = "SideMenu">
        <ul>
            <li class = "dropDown" id = "Category1">Video Games</li>
            <li class = "container hidden" id = "Category1Container">
                <ul>
    <!--                <li><a href = "../Pages/consoles.html">Consoles</a></li>-->
    <!--                <li><a href = "../Pages/games.html">Games</a></li>-->
    <!--                <li><a href = "../Pages/accessories.html">Accessories</a></li>-->
    <!--                <li><a href = "../Pages/giftcards.html">Giftcards</a></li>-->
                </ul>
            </li>
            <li class = "dropDown" id = "Category2">Home Products</li>
            <li class = "container hidden" id = "Category2Container">
    <!--            <ul>-->
    <!--                <li><a href = "../Pages/Cologne.html">Cologne</a></li>-->
    <!--                <li><a href = "../Pages/Shaving Products.html">Shaving Products</a></li>-->
    <!--            </ul>-->
            </li>
            <li class = "dropDown" id = "Category3">Electronics</li>
            <li class = "container hidden" id = "Category3Container">
    <!--            <ul>-->
    <!--                <li><a href = "../Pages/phones.html">Phones</a></li>-->
    <!--                <li><a href = "../Pages/PrebuiltComputers.html">Prebuilt Computers</a></li>-->
    <!--            </ul>-->
            </li>
            <li class = "dropDown" id = "Category4">Others</li>
            <li class = "container hidden" id = "Category4Container">
    <!--            <ul>-->
    <!--                <li><a href = "../Pages/Books.html">Books</a></li>-->
    <!--            </ul>-->
            </li>
        </ul>
    </div>

    <!--- Main Content --->
    <div id = "MainContent">
        <form id = "searchDiv" method = "GET" action = "ProductsPage.php">
            <input type = "search" name = "searchQ" placeholder = "Search" class = "searchInput">
            <input type="image" value = "submit" src = "../images/search-img-W.png">
        </form>
        <?php
            if (isset($_GET['searchQ'])) {
                if ($_GET['searchQ'] != '') {
                    echo '<h1>Showing search results for "'.$_GET['searchQ'].'" </h1>';
                }
            }
        ?>
        <div id = "Items">
            <?php
            require_once "./Items.php";

            $pdo = new PDO('mysql:host=127.0.0.1;port=3306;dbname=webproject','root','');
            if (!isset($_GET['searchQ'])) {
                $stmt = $pdo->prepare("SELECT * from topseller");
                $stmt->execute();

            } else if ($_GET['searchQ'] == '') {
                $stmt = $pdo->prepare("SELECT * from topseller");
                $stmt->execute();
            } else {
                $stmt = $pdo->prepare("SELECT * from topseller where name = :name");
                $stmt->execute(['name'=>$_GET['searchQ']]);
            }

            $pathPrefix = '../images/';
            $count = 0;
            if($stmt->rowCount() > 0) {
                $count = $stmt->rowCount();
                $result = $stmt->fetchAll();
                foreach($result as $item) {
                    echo CreateItem($item['name'], $item['price'], $pathPrefix.$item['src'], 1);
                }
            }
            ?>
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
                        <!-- <button onclick=checkout()>Check Out</button> -->
                        <button>Check Out</button>
                    </td>
                </tr>
            </tfoot>
        </table>
    </div>

    <!--- Login --->
    <div id="loginBox">
        <h1>Login</h1>
        <Form method ="POST" action = "#" autocomplete="on" onsubmit="Login()">
            <div class="formElement">
                <span>Username</span>
                <input type="text" name = "username" id = "UsernameInput" placeholder= "Username" required>
            </div>
            <div class="formElement" >
                <span>Password:</span>
                <input type="password" name ="Password" placeholder = "Password" required>
            </div>
            <input type="submit" value="Login">
            <input type="button" onclick="window.location.href='./Form2.html';" value="No account? Register here" >
        </Form>
    </div>
</body>
</html>