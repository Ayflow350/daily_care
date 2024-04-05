import React from 'react'
import { helpCenterFaqDetails } from '../../utils/data';

const Instructions = () => {
  return (
    <div>
          <div className="col-lg-7 col-md-8">
              <div className="tab-content" id="v-pills-supportContent">
                {helpCenterFaqDetails.map((faq, i) => (
                  <div
                    key={i + 1}
                    className={`tab-pane fade ${faq.class}`}
                    id={faq.target}
                    role="tabpanel"
                  >
                    <div className="support-article-wrap">
                      <h2>{faq.title} </h2>
                      <ul className="support-article-list list-unstyled mt-4">
                        {faq.listItem.map((list, i) => (
                          <li
                            key={i + 1}
                            className="py-4 border-top border-light"
                          >
                            
                              <a className="text-decoration-none d-block text-muted">
                                <h3 className="h5 support-article-title">
                                  {list.header}
                                </h3>
                                <p>{list.desc}</p>
                               
                              </a>
                           
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
    </div>
  )
}

export default Instructions 