import React from 'react';
import * as classes from './CollegeCard.module.css';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import StarIcon from '@material-ui/icons/Star';

const card = (props) =>{
    const data=props.data;
    return(
        <div className={classes.card}>
            <div className={classes.cardtop}>
                {data.promoted?<div className={classes.pointer}>
                    <p>Promoted</p>
                </div>:null}
                <div className={classes.rating}>
                    <div className={classes.rates}>
                    <div className={classes.ratess}>
                        <p><b>{data.rating}</b></p><p style={{fontSize:'10px', paddingTop:'4px'}}>/5</p>
                    </div>
                        <p style={{fontFamily: 'Varela Round'}}>{data.rating_remarks}</p>
                    </div>
                </div>
                <div className={classes.cardtopbottom}>
                    <div className={classes.tags}>
                        <div className={classes.tag}>
                            <p>Best College in 2018</p>
                        </div>
                        <div className={classes.tag}>
                            <p>2kms away</p>
                        </div>
                    </div>
                    <p style={{color: "white", margin:'auto'}}>#{data.ranking}</p>
                </div>
            </div>
            <div className={classes.cardbottom}>
                <div className={classes.cardbottomleft}>
                    <div className={classes.collegeName}>
                    <p style={{fontSize: '20px', color: '#444444'}}><b>{data.college_name}</b></p>
                        <div className={classes.root}>
                            <StarIcon fontSize='inherit'/>
                            <StarIcon fontSize='inherit'/>
                            <StarIcon fontSize='inherit'/>
                            <StarIcon fontSize='inherit'/>
                            <StarIcon fontSize='inherit' color='disabled'/>
                        </div>
                    </div>
                    <div className={classes.nearestPlace}>
                        <p style={{fontSize: '15px', fontWeight:500,color: '#444444'}}>Near Vishwavidyalya Metro Station | 
                        <span className={classes.grey}> 2kms from bus stand</span></p>
                    </div>
                    <div className={classes.famousNearestPlace}>
                        <p style={{fontSize:'15px', color: '#444444'}}>
                            <span className={classes.grenyBlue}><b>93% Match:</b></span> 
                            <b> 2.5kms</b> <span className={classes.grey}>from GTB nagar</span> <span className={classes.grenyBlue}>,</span> 
                            <b> 7kms</b> <span className={classes.grey}> from Rajiv Chowk</span> </p>
                    </div>
                    <div className={classes.offerText}>
                        <p style={{fontSize:'14px', color: '#444444'}}>Flat <b>Rs
                        <span className={classes.grenyBlue}>2,000</span> off + upto Rs 500 wallet! to avail...
                        <span className={classes.blue}>LOGIN</span></b></p>
                    </div>
                </div>
                <div className={classes.cardbottomright}>
                    <div className={classes.discountOffer}>
                        <div style={{display: 'flex', flexDirection: "row"}}>
                        <p style={{fontSize: '12px', color:'#444444',
                    textDecoration: 'line-through',paddingRight:'7px', paddingTop: '4px'}}><span>&#8377;</span>{data.original_fees}</p>
                        <div className={classes.tagIcon}>
                        <LocalOfferIcon/>
                        <p className={classes.tagText}>{data.discount}</p>
                        </div>
                        </div>
                    </div>
                    <div className={classes.discountedFee}>
                        <p style={{textAlign:'right',
                    color:'#dd1c26', fontSize: '25px'}}><b><span>&#8377;</span> {data.discounted_fees}</b></p>
                        <p className={classes.grey} style={{textAlign:'right', fontSize:'12px'}}>Per Semester</p>
                        <p className={classes.grey} style={{textAlign:'right', fontSize:'12px'}}> (3 months)</p>
                    </div>
                    <div className={classes.amenties}>
                        <p className={classes.grenyBlue} style={{
                    fontSize: '14px', textAlign:'right'}}><b>Free Cancellation</b></p>
                    <p className={classes.grenyBlue} style={{
                    fontSize: '14px', textAlign:'right'}}><b>Free Wifi</b></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default card;