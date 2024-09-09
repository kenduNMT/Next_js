const ShopLayout = ({ children }:any) => {
    return (
        <div>
            <header>
                <h2>Shop Header</h2>
            </header>
            <main>{children}</main>
            <footer>Shop Footer</footer>
        </div>
    );
};

export default ShopLayout;
