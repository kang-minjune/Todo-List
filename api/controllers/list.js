import { set } from 'mongoose';
import List from '../models/List.js'
import { ObjectId } from 'mongodb';

//리스트 추가 함수
export const listAdd = async (req, res, next) => {
    try{
        const list = new List(req.body)
        const savedList = await list.save();
        console.log(savedList)
        res.status(200).json(savedList);
    } catch (err) {
        console.log(err)
        next(err);
    }
}

//리스트 조회 함수
export const listGet = async (req, res, next) => {
    try{
        const itemList = await List.findById(req.params.id);
        console.log(itemList)
        res.status(200).json(itemList);
    } catch(err) {
        console.log(err)
        next(err);
    }
}

export const listGetAll = async(req, res, next) => {
    try{
        const itemListAll = await List.find(req.body);
        console.log(itemListAll)
        res.status(200).json(itemListAll);
    } catch(err){
        console.log(err);
        next(err);
    }
}

//리스트 수정 함수
export const listUpdate = async (req, res, next) => {
     try{
        
         const listId = await List.findById(
            req.params.id
         );

         if(ObjectId.isValid(listId)){
            return res.status(400).json({ message: "Invalid ID format", listId });
         }
          
         const updatedList = await List.findByIdAndUpdate(
            listId,
            {
                 $set: {
                       listitem : req.body.listitem,
                       memo: req.body.memo
                 }
            },
            {new: true, runValidators: true }
         );

         if(!updatedList) {
            return res.status(404).json({ message: "List not found" });
         }

         console.log("Updated list document: ", updatedList)
         res.status(200).json(updatedList);
     }  catch(err) {
        console.log('Error updating list document: ', err)
        next(err);
     }  
}



//리스트 삭제 함수
export const listDelete = async (req, res, next) => {
      try{
         const listId = await List.findById(
            req.params.id
         );

         await List.findByIdAndDelete(listId);
         res.status(200).json("List has been deleted.")
      } catch (err){
         console.log(err)
         next(err)
      }
}