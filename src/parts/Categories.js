import React from "react";

import Button from "elements/Button";

export default function Categories({ data }) {
  return data.map((category, categoryIndex) => {
    return (
      <section className="container" key={`category-${categoryIndex}`}>
        <h4 className="mb-3 font-weight-medium">{category.name}</h4>
        <div className="container-grid">
          {category.items.length === 0 ? (
            <div className="row">
              <div className="col-auto align-items-center">
                There no property at this category
              </div>
            </div>
          ) : (
            category.items.map((item, itemIndex) => {
              return (
                <div
                  className="item column-3 row-1"
                  key={`category-${categoryIndex}-item-${itemIndex}`}
                >
                  <div className="card">
                    {item.isPopular ? (
                      <div className="tag">
                        Popular{" "}
                        <span className="fon-weight-light">Choiche</span>
                      </div>
                    ) : (
                      ""
                    )}
                    <figure className="img-wrapper" style={{ height: 180 }}>
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="img-cover"
                      />
                    </figure>
                    <div className="meta-wrapp">
                      <Button
                        type="link"
                        href={`/properties/${item._id}`}
                        className="strecthed-link d-block"
                      >
                        <h5 className="h4 text-dark">{item.name}</h5>
                      </Button>
                      <span className="font-weight-light text-gray-500">
                        {item.city}, {item.country}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>
    );
  });
}
